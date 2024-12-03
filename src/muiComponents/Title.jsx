// eslint-disable-next-line react/prop-types
const Title = ({ first, second }) => {
  console.log(first === "featured");

  return (
    <div
      className={`capitalize ${
        first === "featured" || first === "live" ? "px-[15px]" : null
      }
      ${first === "how to start your" ? "text-center py-16" : null}
    `}
    >
      <h1
        className={`text-[20px] lg:text-[34px] font-[700] text-textPrimary ${
          first === "top" ? "leading-10" : null
        }`}
      >
        <span className="underline text-white">{first}</span> {second}
      </h1>
    </div>
  );
};

export default Title;
