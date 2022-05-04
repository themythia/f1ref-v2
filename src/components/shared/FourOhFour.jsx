const FourOhFour = () => {
  return (
    <main className='p-4 sm:p-8 md:p-6 lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] row-start-2 row-end-3 animate__animated animate__fadeIn'>
      <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px dark:shadow-2px-dark p-4 md:p-6 w-full flex flex-col justify-center items-center h-full'>
        <p className='font-poppins text-3xl mb-4 md:mb-6'>404</p>
        <p className='font-openSans text-xl'>Page not found</p>
        <p className='font-openSans text-sm'>
          Please check the URL in the address bar and try again.
        </p>
      </div>
    </main>
  );
};
export default FourOhFour;
