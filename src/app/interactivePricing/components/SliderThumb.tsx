interface SliderThumbProps {
  isDragging: boolean;
}

export const SliderThumb = ({ isDragging }: SliderThumbProps) => (
  <div
    className={`flex items-center justify-center w-10 h-10 rounded-full bg-[#10D5C2] ${
      isDragging ? "scale-110" : ""
    } transition-transform`}
  >
    <svg width="22" height="13" xmlns="http://www.w3.org/2000/svg">
      <g fill="#FFF" fillRule="evenodd">
        <path d="M16 2.558v7.884a1 1 0 001.735.679l3.639-3.943a1 1 0 000-1.356l-3.64-3.943A1 1 0 0016 2.558zM6 2.558v7.884a1 1 0 01-1.735.679L.626 7.178a1 1 0 010-1.356l3.64-3.943A1 1 0 016 2.558z" />
      </g>
    </svg>
  </div>
); 