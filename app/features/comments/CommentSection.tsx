import React, { useState, useEffect } from "react";
import { MessageSquare, ThumbsUp, Send } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Comment } from "../../types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchComments,
  postComment,
  setComments,
  likeCommentLocal,
} from "../../store/commentsSlice";

interface CommentSectionProps {
  initialComments: Comment[];
  articleId?: string;
}

export default function CommentSection({ initialComments, articleId }: CommentSectionProps) {
  const dispatch = useAppDispatch();
  const commentsList = useAppSelector((state) => state.comments.items);

  const [newComment, setNewComment] = useState<string>("");
  const [authorName, setAuthorName] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    const targetId = articleId || initialComments[0]?.articleId;
    if (targetId) {
      dispatch(fetchComments(targetId));
    } else {
      dispatch(setComments(initialComments));
    }
  }, [articleId, dispatch, initialComments]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim() || isSubmitting) return;

    setIsSubmitting(true);
    const targetArticleId = articleId || initialComments[0]?.articleId || "general";

    try {
      await dispatch(
        postComment({
          articleId: targetArticleId,
          author: authorName,
          text: newComment,
        })
      ).unwrap();

      setNewComment("");
      setAuthorName("");
    } catch (err) {
      console.error("Error dispatching comment to Redux/MongoDB:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLike = (id: string) => {
    dispatch(likeCommentLocal(id));
  };

  return (
    <section className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-10 border border-gray-100 dark:border-gray-800 shadow-sm space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-emerald-600" />
          <span>Reader Comments ({commentsList.length})</span>
        </h3>
        <span className="text-xs text-gray-400 font-medium">Join the Discussion</span>
      </div>

      {/* New Comment Input Form */}
      <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-3">
        <h4 className="text-xs font-bold text-gray-800 dark:text-white uppercase tracking-wider">Leave a Comment</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            required
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="Your Name (e.g. Alex Traveler)"
            className="w-full px-4 py-2.5 text-xs bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <textarea
          rows={3}
          required
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your experience, tips, or questions about this destination..."
          className="w-full px-4 py-2.5 text-xs bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <div className="flex justify-end">
          <Button type="submit" size="sm" disabled={isSubmitting} className="rounded-xl gap-1.5 font-bold text-xs px-5">
            <Send className="w-3.5 h-3.5" />
            <span>{isSubmitting ? "Posting..." : "Post Comment"}</span>
          </Button>
        </div>
      </form>

      {/* Comments Feed List */}
      <div className="space-y-4">
        {commentsList.map((item) => {
          return (
            <div key={item.id} className="p-4 rounded-2xl border border-gray-100 dark:border-gray-800 flex gap-4 bg-gray-50/50 dark:bg-gray-800/20">
              <img
                src={item.avatar}
                alt={item.author}
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  (e.target as HTMLImageElement).src = "https://i.pravatar.cc/150?img=33";
                }}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-emerald-500/20 flex-shrink-0"
              />

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h5 className="font-bold text-xs text-gray-900 dark:text-white">{item.author}</h5>
                  <span className="text-[11px] text-gray-400">{item.date}</span>
                </div>

                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.text}
                </p>

                <div className="pt-2 flex items-center gap-4 text-[11px]">
                  <button
                    onClick={() => handleLike(item.id)}
                    className="flex items-center gap-1 text-gray-400 hover:text-emerald-600 transition-colors font-medium"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{item.likes} Likes</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
