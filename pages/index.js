const user = {
    name: "Marcio Andre",
    imageUrl: "https://scontent.fsdu6-1.fna.fbcdn.net/v/t39.30808-1/351124408_177212451979966_5677060223499050452_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeE-zz1cQs10sy1NPP6rVdhY4lw41_lyo7niXDjX-XKjuWJD2r4ueQbTbxz9qgmm9wtqLfOAweNZl835bVWEGXPP&_nc_ohc=wHrma8vs_j0Q7kNvgHDqwsu&_nc_ht=scontent.fsdu6-1.fna&oh=00_AYBmCIOmmoPKBbpRXa9hab23lhq_Y6TkNgLxISVmlECOEw&oe=66CAE2E6",
    imageSize: 90,
};

export default function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
                <Link to="https://web.facebook.com/marcio.andre.37604">    
                    <img
                        className="avatar"
                        src={user.imageUrl}
                        alt={'Photo of' + user.name}
                        style={{
                            width: user.imageSize,
                            height: user.imageSize
                        }}
                    />
                </Link>
        </>
    );
}
