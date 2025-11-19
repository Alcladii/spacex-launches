export const FavoriteHeader = () => {
  return (
    <header className="w-full h-[254px] bg-app-header-nav flex justify-center">
      <div className="max-w-6xl w-full px-4 flex flex-col justify-center">
        <h1
          className="
            font-sans font-bold
            text-[48px] leading-[52px]
            sm:text-[68px] sm:leading-[72px]
            tracking-[-1.5px]
            text-app-text
          "
        >
          Favorites
        </h1>

        <p
          className="
            mt-4
            font-sans font-normal
            text-[16px] leading-5
            sm:text-[18px] sm:leading-[22px]
            text-app-text
          "
        >
          Your collection of moments that changed space forever.
        </p>
      </div>
    </header>
  );
};
