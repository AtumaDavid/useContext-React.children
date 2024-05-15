/* eslint-disable react/prop-types */

export default function ToggleButton({ children, onClick }) {
  return (
    <button className="button-lg" onClick={onClick}>
      {children}
    </button>
  );
}
