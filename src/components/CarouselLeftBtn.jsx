import CarouselRightBtn from "./CarouselRightBtn";

const CarouselLeftBtn = (props) => {
  return (
    <div style={{ transform: "rotateY(180deg)" }}>
      <CarouselRightBtn {...props} />
    </div>
  );
};

export default CarouselLeftBtn;
