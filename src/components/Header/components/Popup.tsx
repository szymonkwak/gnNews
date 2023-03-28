const Popup = () => {
  return (
    <>
      <input type="checkbox" id="fun-modal" className="modal-toggle" />
      <label htmlFor="fun-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="font-bold text-lg">Co było najtrudniejsze?</h3>
          <p className="py-4">
            Ustawienie środowiska testowego. Przy każdym kolejnym kroku trzeba było dodać provider, mock, itp. Finalnie
            - sukces, testy śmigają :)
          </p>
          <h3 className="font-bold text-lg">Co sprawiło największą frajdę?</h3>
          <p className="py-4">
            Zaprojektowanie UI. Na codzień zajmuję się kodowaniem z już zaprojektowanych mockup`ów, więc zaprojektowanie
            wyglądu apki sprawiło najwięcej frajdy :)
          </p>
        </label>
      </label>
    </>
  );
};

export default Popup;
