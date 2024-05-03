import logo from '@assets/img/logo.svg';

export default function Popup(): JSX.Element {
  const open = () => {
    if (document) {
      const element: any = document.getElementById('my_modal_1')
      if (element) {
        element?.showModal()
      }
    }
  }
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-gray-800">
      <header className="flex flex-col items-center justify-center text-white">
        <img src={logo} className="h-36 pointer-events-none animate-spin-slow" alt="logo" />
        <p>
        </p>
        <p>Popup styled with TailwindCSS!</p>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn" onClick={open}>open modal</button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </header>
    </div>
  );
}
