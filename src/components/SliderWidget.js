import { motion } from 'framer-motion';

const SliderWidget= ({ images }) => {
  return (
    <div className="relative w-full h-64 md:h-96 lg:h-128">
      <motion.div
        className="w-full h-full absolute grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4"
        drag="x"
        dragConstraints={{ left: 0, right: 200 }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SliderWidget;
