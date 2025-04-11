const BookCard = ({ title, author }) => {
  return (
    <div className="border p-4 shadow-md rounded-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">by {author}</p>
    </div>
  );
};

export default BookCard;
