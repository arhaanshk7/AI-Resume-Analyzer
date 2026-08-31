function InfoCard({ title, items, color }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-4">
        {title}
      </h2>

     <span className={`w-3 h-3 rounded-full ${color.replace("text", "bg")}`}></span>

      <ul className="space-y-3">

        {items.map((item, index) => (

          <li
            key={index}
            className={`font-medium ${color}`}
          >
            • {item}
          </li>

        ))}

      </ul>

    </div>
  );
}

export default InfoCard;