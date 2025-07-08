import profileImage from '../assets/huytu.jpg';

export default function Info() {
    return (
        <div className="ctn-info">
            <img src={profileImage} alt="Image of myself" className="ctn-info-profile-image" width="317px" />
            <h1>Nguyen Xuan Tu</h1>
            <h4>Cloud Engineer | Full-stack Developer</h4>
            <div className="ctn-info-btn">
                <button className="btn-email">
                    <i className="fas fa-envelope"></i> Email
                </button>
                <button className="btn-linkedin">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </button>
            </div>
        </div>
    )
}