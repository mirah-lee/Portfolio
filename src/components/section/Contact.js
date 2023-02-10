import '../../asset/style/Contact.scss';

function Contact(props) {
    return (
        <section className="contact" id='contact'>
            <div className="inner">
                <h2>CONTACT</h2>
                <div className="address">
                    <div className="email">
                        <span>Email</span>
                        <p>ipay124@gmail.com</p>
                    </div>
                    <div className="github">
                        <span>Github</span>
                        <p><a href="https://github.com/mirah-lee" target='_blank'>https://github.com/mirah-lee</a></p>
                    </div>
                </div>
                <div className="txt">
                    <p>새로운 시도를 좋아하고 창작하기를 좋아하는 프론트 엔드 신입 개발자입니다. 새로운 도전에 두려워 하지않고 맞서 부딪히며, 꾸준한 노력과 성장으로 나아가는 개발자가 되겠습니다.</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;