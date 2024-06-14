export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em> Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const percentageOfPackedItems = (packedItems / numItems) * 100;

  return (
    <footer className="stats">
      <em>
        {percentageOfPackedItems === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed ${numItems} (${Math.round(
              percentageOfPackedItems
            )}%)`}
      </em>
    </footer>
  );
}
