import React from 'react'

import phone1 from './img/desktop-1-2.png';
import phone2 from './img/images.jpg';
import phone3 from './img/anonymous-cash-app-review-2.jpg';
import phone4 from './img/desktop1-v2.png';

import ng from './img/flag-icons/ngn.png'
import us from './img/flag-icons/us.jpg'
import uk from './img/flag-icons/united-kingdom.png'
import canada from './img/flag-icons/canada.png'



const App = () => {

  
  return (
    <div>
      <div className='container mb-5'>
        <header>
          <nav className='navs' style={{marginTop: '50px', marginBottom: '80px'}}>
            <div className='logo'>
              <div>
                <i className="bi bi-caret-right-fill"></i>
                <i className="bi bi-caret-right-fill"></i>
              </div>
              <h6 className='logo-name'>FinanceFast</h6>
            </div>
            <ul className='d-none d-lg-flex nav-links'>
              <li className='px-2'>Blog</li>
              <li>Company</li>
              <li className='px-2'>Products</li>
              <li className='fs-4 fs-md-5 px-4' style={{color: '#000', fontWeight: '600', background: '#d8c6ff', width: 'fit-content', padding: '8px', borderRadius: '50px'}}><i className='bi bi-phone'></i> Download</li>
            </ul>
          </nav>
        </header>

        <section className='text-center'>
          <div className='mb-5'>
            <h3 className='fw-bolder fs-1' style={{fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'}}>Simplify Your International
            <p> Transactions with <span className='setText'> One Platform</span></p>
            </h3>
            <strong  className='fs-6' style={{fontWeight: '400'}}>Say Goodbye to the Hassles of Traditional Money Transfers. FinanceFast allows<br />
                you effortlessty transfer money anywhere in the world with conhdence and ease.
            </strong>
          </div>
        <form action="" className='form-container'>
          <div className='optionGroup'>
            <div className='mb-3 mb-md-0 d-block d-md-inline p-2 p-md-0 mx-auto'>
                <div class="dropdown">
                  <button class="btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={ng} className='flag' />
                  </button>
                  <span> <i className='bi bi-chevron-down mx-2'></i> +234 </span>
                  <ul class="dropdown-menu">
                    <li><img src={us} className='flag'  /></li>
                    <li> <img src={uk} className='flag'  /></li>
                    <li> <img src={canada} className='flag'  /></li>
                  </ul>
                </div>
                
              <input type="number" autoFocus className='optionInput' />
            </div>
            <button className=' form-button'>
              Download now
            </button>
          </div>
        </form>
        </section>
      </div>
      <div style={{marginTop: '160px'}}>
        <div className='text-center d-block d-lg-none'>
          <img src={phone4} alt="phone3" className='shadow img-fluid phone-2 mx-0 me-sm-4' />
          <img src={phone1} alt="phone3" className='shadow img-fluid phone-2 ms-3 d-none d-sm-inline d- ' />
        </div>
        <div className='phone d-none d-lg-flex'>
          <img src={phone2} alt="phone2" className='img-fluid phone-1' />
          <img src={phone1} alt="phone1" className='img-fluid phone-2 mx-5' />
          <img src={phone3} alt="phone3" className='img-fluid phone-1' />
          <img src={phone4} alt="phone3" className='img-fluid phone-2 ms-5' />
        </div>
      </div>
       <div className='row iconText'>
        <h6 className='col-md-3  p-3 p-md-5 text-center text-md-start' style={{fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', margin: 'auto', color: '#65626a', }}>We're have been recognized by Leading Finance  Publications and Organizations.</h6>
          
        <div className='col-md-8 iconGroup'>
          <div className=' iconSubGroup'>
          
            <div><img src="https://i1.wp.com/www.recoverfrominjury.com/wp-content/uploads/2018/03/huffpost.png?fit=4284%2C500&ssl=1" className='img-icon' alt="huffpost" /></div>
            <div><img src="https://th.bing.com/th/id/R.5e679028f284f925ec61d1a4d802617b?rik=J7dgSJbkUNvKcg&pid=ImgRaw&r=0" className='img-icon' alt="bloomberg" /></div>
            <div><img src="https://th.bing.com/th/id/R.8e8c4214292bbd246739bdf8e68c17d6?rik=eaOqUsaR5l9qxQ&pid=ImgRaw&r=0" className='img-iconTC' alt="tc" /></div>
            <div><img src="https://th.bing.com/th/id/R.9c8889463bf4bf2ae60c108e33f2fa58?rik=9UhP9O50SKSo0Q&riu=http%3a%2f%2fvaletmag.com%2fgr%2fthe-edit%2fpublications%2f2_0%2fart-logo_harvard_business_review.png&ehk=WA7o14EXRwBj%2b97j6f%2bwX85wM9zfOtf%2fXrH3Q7v%2fV2g%3d&risl=&pid=ImgRaw&r=0" className='img-icon' alt="harvard" /></div>
            <div><img src="https://th.bing.com/th/id/R.bb4b732099b393e17850fbe94424ce6f?rik=0hD1qsCGePVBkQ&pid=ImgRaw&r=0" className='img-icon' alt="ycombinator" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
