const Popup = () => {
  return (
    <>
      <input type="checkbox" id="fun-modal" className="modal-toggle" />
      <label htmlFor="fun-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="font-bold text-lg">There will be something here soon!</h3>
          <p className="py-4">We will see what will be fun, and what will be hard.</p>
        </label>
      </label>
    </>
  );
};

export default Popup;
