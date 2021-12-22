import Header from "./Header";

const Container = ({ children, userIsAdmin, setUserIsAdmin }) => {
  return (
    <div
      className="
      p-5
      xl:p-10
      max-w-screen-2xl
      relative
      left-1/2
      transform
      -translate-x-1/2
    "
    >
      <Header userIsAdmin={userIsAdmin} setUserIsAdmin={setUserIsAdmin} />

      <main className="lg:grid lg:grid-cols-2 lg:gap-8 xl:grid-cols-3 mt-8">
        {children}
      </main>
    </div>
  );
};

export default Container;
