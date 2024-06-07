const Footer = () => {
  return (
    <footer className="flex flex-col bg-main-bg text-white">
      <hr className="h-px mb-8 md:my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex justify-center items-center">
        <span className="text-white mb-6">
          Made by{" "}
          <a
            className="text-gray-300 underline hover:no-underline"
            href="https://julandrod.github.io/"
            target="_blank"
          >
            Julandrod
          </a>{" "}
          | 2024 🇨🇴
        </span>
      </div>
    </footer>
  );
};

export default Footer;
