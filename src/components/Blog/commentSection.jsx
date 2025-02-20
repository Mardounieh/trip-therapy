import React, { useState } from "react";
import { Icon } from "@iconify/react";

const CommentSection = React.memo(() => {
  const sampleComments = [
    {
      id: 1,
      userName: "علی محمدی",
      date: "۲ ساعت پیش",
      content: "مقاله بسیار مفیدی بود! مخصوصاً قسمت مربوط به کامپوننت‌های React خیلی کاربردی توضیح داده شده بود.",
      likes: 12,
      replies: [
        {
          id: 2,
          userName: "سارا حسینی",
          date: "۱ ساعت پیش",
          content: "کاملاً موافقم. من هم از این مقاله خیلی استفاده کردم.",
          likes: 5,
        }
      ]
    },
    {
      id: 3,
      userName: "محمد رضایی",
      date: "۳ ساعت پیش",
      content: "میشه در مورد هوک‌های سفارشی هم یک مقاله بنویسید؟ خیلی علاقه دارم در این مورد بیشتر یاد بگیرم.",
      likes: 8,
    },
    {
      id: 4,
      userName: "زهرا کریمی",
      date: "دیروز",
      content: "من تازه شروع به یادگیری React کردم و این مقاله خیلی به من کمک کرد. ممنون از اشتراک‌گذاری تجربیاتتون.",
      likes: 15,
      replies: [
        {
          id: 5,
          userName: "امیر حسین",
          date: "۲۰ ساعت پیش",
          content: "خوشحالم که مفید بوده! پیشنهاد می‌کنم داکیومنت‌های اصلی React رو هم حتماً مطالعه کنید.",
          likes: 7,
        }
      ]
    }
  ];
  
  const [comments, setComments] = useState(sampleComments);
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState(null);

  const Comment = ({ comment }) => (
    <div className="border-b border-lightPrimary/10 dark:border-darkPrimary/10 py-4">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-lightPrimary/10 dark:bg-darkPrimary/10 flex items-center justify-center">
          <Icon
            icon="ph:user"
            className="w-5 h-5 text-lightPrimary dark:text-darkPrimary"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-medium text-lightText dark:text-darkText">
              {comment.userName}
            </h4>
            <span className="text-sm text-lightText/60 dark:text-darkText/60">
              {comment.date}
            </span>
          </div>
          <p className="mt-2 text-lightText/80 dark:text-darkText/80">
            {comment.content}
          </p>
          <div className="flex items-center gap-4 mt-3">
            <button className="flex items-center gap-1 text-sm text-lightText/60 dark:text-darkText/60 hover:text-lightPrimary dark:hover:text-darkPrimary">
              <Icon icon="lucide:heart" className="w-4 h-4" />
              <span>{comment.likes || 0}</span>
            </button>
            <button
              onClick={() => setReplyTo(comment.id)}
              className="flex items-center gap-1 text-sm text-lightText/60 dark:text-darkText/60 hover:text-lightPrimary dark:hover:text-darkPrimary"
            >
              <Icon icon="lucide:message-circle" className="w-4 h-4" />
              <span>پاسخ</span>
            </button>
          </div>
          {/* Nested Replies */}
          {comment.replies?.map((reply) => (
            <div key={reply.id} className="mr-8 mt-4">
              <Comment comment={reply} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );  

  return (
    <div className="mt-12 border-t border-lightPrimary/20 dark:border-darkPrimary/20 pt-8">
      <h3 className="text-xl font-bold text-lightText dark:text-darkText mb-6">
        نظرات ({comments.length})
      </h3>
      
      {/* Comment Form */}
      <div className="bg-lightBackground/30 dark:bg-darkBackground/30 p-4 rounded-xl mb-8">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full bg-lightBackground dark:bg-darkBackground/50 border border-lightPrimary/20 dark:border-darkPrimary/20 rounded-lg p-3 text-lightText dark:text-darkText outline-none focus:border-lightPrimary dark:focus:border-darkPrimary resize-none"
          placeholder={replyTo ? "پاسخ خود را بنویسید..." : "نظر خود را بنویسید..."}
          rows="4"
        />
        <div className="flex justify-between items-center mt-3">
          {replyTo && (
            <button 
              onClick={() => setReplyTo(null)}
              className="text-sm text-lightText/60 dark:text-darkText/60 hover:text-lightPrimary dark:hover:text-darkPrimary"
            >
              لغو پاسخ
            </button>
          )}
          <button className="px-5 py-2 bg-gradient-to-r from-lightPrimary to-lightSecondary text-white rounded-lg hover:opacity-90">
            {replyTo ? "ارسال پاسخ" : "ارسال نظر"}
          </button>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
});

export default CommentSection