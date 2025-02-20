import PagesMain from '../../Pages/Pages-main/PagesMain'
import Footer from '../Footer/Footer'
import Header_pages from '../Header-pages/Header_pages'
import Header from '../Header/Header'

function HelpCenter() {
    return (
        <div>
            <div className="header">
                <Header />
                <div>
                    <Header_pages title="Help Center">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                    </Header_pages>
                </div>
            </div>
            <PagesMain />
            <Footer />

        </div>
    )
}

export default HelpCenter
