export function Footer({ items }) {
  if (!items.length)
    return (
      <footer className=" footer text-center bg-success border ">
        <h4>Start adding some items to your packing list 🚀</h4>
      </footer>
    );

  const numberOfItems = items.length;
  const packedNumber = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedNumber / numberOfItems) * 100);
  console.log(percentage);

  return (
    <footer className="text-center bg-success border footer">
      {percentage === 100
        ? "You got everything! Ready to go ✈️"
        : ` 💼 You have ${numberOfItems} items on your list, and you already packed ${packedNumber} (${percentage}%)`}
    </footer>
  );
}
