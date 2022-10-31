import React from 'react';

const Notification = () => {
  return (
    <section className="flex items-center justify-center min-h-[70vh]">
      <button
        type="button"
        onClick={() =>
          alert('Last week, I got more than 1.4M Post Impressions on Linked.')
        }
        className="tracking-wide font-bold py-4 px-24 bg-[#ff0000] rounded-md"
      >
        Notify Me!
      </button>
    </section>
  );
};

export default Notification;
