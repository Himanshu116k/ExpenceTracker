const ExpenceCard = ({
  name = "Groceries",
  description = "Monthly household items",
  amount = 1200,
  date = "12 Sep 2025",
}) => {
  return (
    <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-5 shadow-sm hover:border-zinc-700 transition">
      
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-white">
          {name}
        </h3>
        <span className="text-red-500 font-semibold text-lg">
          ₹{amount}
        </span>
      </div>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-400">
        {description}
      </p>

      {/* Date */}
      <div className="mt-4 text-xs text-gray-500">
        {date}
      </div>
    </div>
  );
};

export default ExpenceCard;
