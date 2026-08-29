import React, { useState } from "react";
import { MessageSquare, ThumbsUp, Send, User } from "lucide-react";
import { Button } from "./ui/button";

export default function CommentSection({ initialComments = [] }) {
  const [comments, setComments] = useState(initialComments);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [likedIds, setLikedIds] = useState({});

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newComment = {
      id: Date.now(),
      author: name.trim() || "Adventurer Guest",
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(name || "guest")}`,
      date: "Just now",
      text: text.trim(),
      likes: 0,
    };

    setComments([newComment, ...comments]);
    setName("");
    setText("");
  };

  const toggleLike = (id) => {
    setLikedIds((prev) => {
      const currentlyLiked = prev[id];
      setComments((list) =>
        list.map((c) =>
          c.id === id ? { ...c, likes: c.likes + (currentlyLiked ? -1 : 1) } : c
        )
      );
      return { ...prev, [id]: !currentlyLiked };
    });
  };

  return (
    <section className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-800 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-emerald-600" />
          <span>Traveler Discussion & Feedback</span>
        </h3>
        <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 text-xs font-bold px-3 py-1 rounded-full">
          {comments.length} Comments
        </span>
      </div>

      {/* Leave a Comment Form */}
      <form onSubmit={handleAddComment} className="space-y-3 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name (optional)"
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div>
          <textarea
            required
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share your travel errand, tips, or questions about this destination..."
            className="w-full p-3 text-xs rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit" size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-5 gap-1.5 text-xs">
            <Send className="w-3.5 h-3.5" />
            <span>Post Comment</span>
          </Button>
        </div>
      </form>

      {/* Comment List */}
      <div className="space-y-4 pt-2">
        {comments.length === 0 ? (
          <p className="text-xs text-center text-gray-400 py-6">
            No comments yet. Be the first adventurer to leave a review! 🌴
          </p>
        ) : (
          comments.map((comment) => {
            const isLiked = likedIds[comment.id];
            return (
              <div key={comment.id} className="flex gap-3.5 p-4 rounded-2xl bg-gray-50/50 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-800/60">
                <img
                  src={comment.avatar}
                  alt={comment.author}
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-emerald-400/50"
                />
                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-900 dark:text-white">{comment.author}</span>
                    <span className="text-[10px] text-gray-400">{comment.date}</span>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{comment.text}</p>
                  <div className="flex items-center gap-3 pt-1">
                    <button
                      onClick={() => toggleLike(comment.id)}
                      className={`flex items-center gap-1 text-[11px] font-semibold transition-colors ${
                        isLiked ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{comment.likes}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
