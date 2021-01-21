import ContentLoader from 'react-content-loader';

interface IUserLoader {
    includeButton?: boolean;
    backgroundColor?: string;
    foregroundColor?: string;
}

export const PostLoader: React.FC<any> = (props) => {
    return (
        <ContentLoader
            speed={2}
            width="100%"
            height="100%"
            viewBox="0 0 500 400"
            backgroundColor="#e2e2e2"
            foregroundColor="#ecebeb"
            {...props}
        >
            <circle cx="20" cy="20" r="20" />
            <rect x="48" y="8" rx="3" ry="3" width="100" height="10" />
            <rect x="48" y="26" rx="3" ry="3" width="52" height="10" />
            <rect x="0" y="60" rx="3" ry="3" width="80%" height="10" />
            <rect x="0" y="78" rx="3" ry="3" width="56%" height="10" />
            <rect x="0" y="98" rx="3" ry="3" width="65%" height="10" />
            <rect x="0" y="132" rx="3" ry="3" width="100%" height="420" />
        </ContentLoader>
    )
}

export const UserLoader: React.FC<IUserLoader> = (props) => (
    <ContentLoader
        speed={2}
        width="100%"
        height="55"
        // viewBox="0 0 400 80"
        backgroundColor={props.backgroundColor || "#e2e2e2"}
        foregroundColor={props.foregroundColor || "#ecebeb"}
    >
        <circle cx="30" cy="30" r="20" />
        <rect x="60" y="25" rx="5" ry="5" width="40%" height="10" />
        {props.includeButton && <rect x="80%" y="10" rx="20" ry="20" width="100" height="40" />}
    </ContentLoader>
);

UserLoader.defaultProps = { includeButton: false };

export const ProfileLoader: React.FC<any> = (props) => (
    <div>
        {/*  ----- COVER PHOTO ------- */}
        <div className="w-full h-80 bg-gray-200 relative overflow-hidden" />
        <div className="contain w-full relative flex transform -translate-y-28">
            {/* --- PROFILE PICTURE */}
            <div className="relative w-1/3 h-60 mr-2 flex justify-center">
                <div className="w-60 h-60 rounded-full border-4 border-white overflow-hidden">
                    <ContentLoader
                        speed={2}
                        width="100%"
                        height="100%"
                        viewBox="0 0 500 500"
                        backgroundColor="#e2e2e2"
                        foregroundColor="#ecebeb"
                    >
                        <circle cx="250" cy="250" r="250" />
                    </ContentLoader>
                </div>
            </div>
            <div className="flex w-full  flex-col self-end">
                <div className="w-full flex justify-between mr-14 ml-2 mb-2">
                    {/* ---- NAME AND USERNAME */}
                    <div>
                        <ContentLoader
                            speed={2}
                            width="100%"
                            height="100%"
                            backgroundColor="#e2e2e2"
                            foregroundColor="#ecebeb"
                        >
                            <rect x="0" y="70" rx="5" ry="5" width="220" height="25" />
                            <rect x="0" y="110" rx="5" ry="5" width="100" height="15" />
                        </ContentLoader>
                    </div>
                    {/* ---- FOLLOW/UNFOLLOW/MESSAGE BUTTON */}
                    <div>
                        <ContentLoader
                            speed={2}
                            width="100%"
                            height="100%"
                            backgroundColor="#e2e2e2"
                            foregroundColor="#ecebeb"
                        >
                            <rect x="25" y="70" rx="25" ry="25" width="100" height="50" />
                            <rect x="140" y="70" rx="25" ry="25" width="100" height="50" />
                        </ContentLoader>
                    </div>
                </div>
            </div>
        </div>
    </div>
);