const ImageCard = ({ image }) => {
  return (
    <div className="mb-4 break-inside-avoid">
      <img
        src={`https://picsum.photos/id/${image.id}/500/700`}
        alt={image.author}
        loading="lazy"
        className="w-full rounded-xl object-cover"
      />
    </div>
  );
};

export default ImageCard;
