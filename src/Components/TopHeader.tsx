

const TopHeader = () => {
  return (
    <div className="bg-blue-600">
      <marquee >
        <div className="flex items-center gap-4 p-2">
          <p className="text-white font-medium text-sm">
            Currenly, I am looking for job change.
          </p>
          <button className="bg-black text-white font-medium px-2 py-1 rounded-md text-sm">
            Contact Me
          </button>
        </div>
      </marquee>
    </div>
  );
};

export default TopHeader;
