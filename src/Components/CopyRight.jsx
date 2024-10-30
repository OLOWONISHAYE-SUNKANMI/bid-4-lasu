import React from 'react'

const CopyRight = () => {
  return (
    <section className="copyright">
        <div className="copyright-grid">
            <div className="brand">
                <p>Copyright@Ray's Gadget Brand </p>
            </div>
            <div className="developer">
                <p>Developed by SK_PPROJECT </p>
            </div>
            <div className="logo">
                <img src="src/assets/visa.png" alt="" className="visa" />
                <img src="src/assets/mastercard.png" alt="" className="mastercard" />
                <img src="src/assets/verve.png" alt="" className="verve" />
            </div>
        </div>

    </section>
  )
}

export default CopyRight