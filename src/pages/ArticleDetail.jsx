import MarkdownContent from "../components/MarkdownContent";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop&q=80";

export default function ArticleDetail() {
  const { id } = useParams();
  const post = places.find((p) => p.id === id) || places[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!post) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold">Story Not Found</h2>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
      {/* Back Button */}
      <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Destination Stories</span>
      </Link>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Main Article Content */}
        <main className="flex-1 space-y-8">
          <article className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 p-6 sm:p-10 space-y-6">
            {/* Category & Rating */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                <span>★ {post.rating}.0 Rating</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl font-black text-gray-900 dark:text-white leading-tight">
              {post.title}
            </h1>

            {/* Author & Date Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-100 dark:border-gray-800 text-xs">
              <div className="flex items-center gap-3">
                <img
                  src={post.author?.avatar}
                  alt={post.author?.name}
                  onError={(e) => { e.target.src = "https://i.pravatar.cc/150?img=33"; }}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-500"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{post.author?.name}</h4>
                  <p className="text-gray-400 text-[11px]">{post.author?.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  {post.publishedAt}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Main Featured Image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
              <img
                src={post.img}
                alt={post.destination}
                onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{post.location}</span>
              </div>
            </div>

            {/* Article Body Content */}
            <div className="space-y-4 pt-4">
              <p className="font-medium text-gray-900 dark:text-white text-base sm:text-lg leading-relaxed border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-r-lg">
                {post.description}
              </p>

              <MarkdownContent content={post.fullContent || post.description} />
            </div>

            {/* Tags */}
            <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-emerald-600" />
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </article>

          {/* Comment Section Component */}
          <CommentSection initialComments={post.comments || []} />
        </main>

        {/* Sidebar */}
        <Sidebar
          searchQuery=""
          onSearchChange={() => {}}
          categories={categories}
          selectedCategory="All Stories"
          onCategorySelect={() => {}}
          allPosts={places}
        />
      </div>
    </div>
  );
}
