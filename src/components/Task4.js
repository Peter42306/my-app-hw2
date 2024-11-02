import React from "react";
import groupPhoto from "./image/groupTitleGroupPhotoScreenshot 2024-10-29 212339.jpg";
import groupMemberPhoto1 from "./image/groupMember1HetfieldScreenshot 2024-10-29 213024.jpg";
import groupMemberPhoto2 from "./image/groupMember2UlrichScreenshot 2024-10-29 213204.jpg";
import groupMemberPhoto3 from "./image/groupMember3HammettScreenshot 2024-10-29 213259.jpg";
import groupMemberPhoto4 from "./image/groupMember4TrujillioScreenshot 2024-10-29 213347.jpg";
import groupAlbumPhoto1 from "./image/groupAlbum1Screenshot 2024-10-30 113928.jpg";
import groupAlbumPhoto2 from "./image/groupAlbum2Screenshot 2024-10-30 164425.jpg";
import groupAlbumPhoto3 from "./image/groupAlbum3Screenshot 2024-10-30 164808.jpg";
import groupAlbumPhoto4 from "./image/groupAlbum4Screenshot 2024-10-30 165227.jpg";

export class MyHWComponentTaskNumber extends React.Component{
    render(){
        return(
            <div className="style-task">
                <h2>Задание 2</h2>
            </div>
        );
    }
}

export class MyHWComponentTaskDescription extends React.Component{
    render(){
        return (
            <div className="style-task">
                <p>Создайте и запустите приложение React, выводящее информацию о ашей любимой музыкальной группе в браузер. Например: название группы, информация об участниках группы, название альбомов, обложки альбомов.</p>
                <hr></hr>
            </div>
        ); 
    }
}

export class MyHWComponentGroupTitlePhoto extends React.Component{
    render(){
        return (
            <div>
                <img src={groupPhoto} alt="group photo"></img>
            </div>
        );
    }
}

export class MyHWComponentGroupTitleName extends React.Component{
    render(){
        return (
            <div>
                <p>METALLICA</p>
            </div>
        );
    }
}

export class MyHWComponentGroupTitleDescription extends React.Component{
    render(){
        return (
            <div>
                <p>Metallica is the definitive heavy metal band, the group that brought the gnarly underground sounds of thrash metal into the mainstream, then reshaped the contours of heavy music and hard rock once they became the biggest rock band in the world after the release of their self-titled "black album" in 1991. By that point, Metallica already had experienced enough upheaval for two careers. Emerging from the feverish metal underground of the early '80s, Metallica became a word-of-mouth sensation with their indie releases Kill 'Em All and Ride the Lightning, records that helped them land a contract with Elektra. Master of Puppets, their major-label debut, found the band marshaling their forces, but months after its release, the group suffered a tragic bus accident that killed bassist Cliff Burton.</p>                
            </div>
        );
    }
}

export class MyHWComponentGroupMember1 extends React.Component{
    render(){        
        const groupMember = {
            name: "James Hetfield",
            berthDate: "August 3, 1963",
            berthPlace: "Downey, California, USA",
            description: "Lead vocalist and rhythm guitarist for Metallica, co-founder of the band. In the early '80s, heavy metal was in danger of becoming a spandex-sporting/hairspray-soaked/makeup-smeared parody, but bands like Metallica brought metal back to its original, straight-ahead approach. With most other metal singers posing for the camera and singing about sex, drugs, and rock & roll, Metallica singer/guitarist James Hetfield's approach was a much-welcomed break from the norm with his tattered jeans and unkempt hair, while singing (well, shouting) about serious subject matter and bashing out intense metal riffs on either his Gibson Explorer or Flying V. In addition to his Metallica duties, Hetfield has also found time to guest on friend's albums, some credited (Primus' 1999 all-star affair Antipop), and some not (ex-Faith No More guitarist Jim Martin's solo debut Milk and Blood and Corrosion of Conformity's Wiseblood). Hetfield and Metallica continue to crank out best-selling albums and sold-out tours, although it appeared as though the group may be entering an uncertain phase of their career in early 2001, when a tell-all band interview in Playboy Magazine (which saw Hetfield recall his troubled early family life and new role as a husband/father, as well as criticizing his bandmates) was quickly followed-up by Newsted's exit from Metallica"
        }
        return (
            <div className="container-group-member container-group-member-style">
                <div className="block-group-member-photo">
                    <img src={groupMemberPhoto1} alt="group member photo"></img>
                </div>
                <div className="block-group-member-info">
                    <p><strong>{groupMember.name}</strong></p>
                    <p>Born: {groupMember.berthDate}</p>
                    <p>Place of berth: {groupMember.berthPlace}</p>
                </div>
                <div className="block-group-member-description">
                    <p>{groupMember.description}</p>
                </div>
            </div>
        );
    }
}

export class MyHWComponentGroupMember2 extends React.Component{
    render(){        
        const groupMember = {
            name: "Lars Ulrich",
            berthDate: "December 26, 1963",
            berthPlace: "Gentofte, Denmark",
            description: "Drummer and co-founder of Metallica, known for his unique playing style. Besides being one of Metallica's founding members and main songwriters, drummer Lars Ulrich is also the band's spokesman. Born on December 26, 1963, in Gentofte, Denmark, Ulrich's father (Torben Ulrich) was a nationally renowned tennis player, and it appeared as though Lars would follow in his father's footsteps, as the young Ulrich practiced hard on tennis skills. In 1973, his father took Lars to his first rock concert, to see the mighty Deep Purple in Copenhagen, which opened the youngster's eyes to hard rock and heavy metal. After he decided that the tennis life wasn't for him after all, Ulrich shifted his focus on music (namely the New Wave of British Heavy Metal movement: Iron Maiden, Saxon, Diamond Head, Motörhead, Def Leppard, etc.) and took up the drums. His family relocated to California in the early '80s, as Lars promptly put an ad in the local music paper looking for other similarly minded musicians looking to start up a band (even though the NWOBHM had yet to make an impression stateside). One of the first replies he received was from guitarist James Hetfield, as the pair agreed that they should form a band that was a reaction against the glam metal that had infiltrated Los Angeles at the time. Soon after, Metallica was officially born. "
        }
        return (
            <div className="container-group-member container-group-member-style">
                <div className="block-group-member-photo">
                    <img src={groupMemberPhoto2} alt="group member photo"></img>
                </div>
                <div className="block-group-member-info">
                    <p><strong>{groupMember.name}</strong></p>
                    <p>Born: {groupMember.berthDate}</p>
                    <p>Place of berth: {groupMember.berthPlace}</p>
                </div>
                <div className="block-group-member-description">
                    <p>{groupMember.description}</p>
                </div>
            </div>
        );
    }
}

export class MyHWComponentGroupMember3 extends React.Component{
    render(){        
        const groupMember = {
            name: "Kirk Hammett",
            berthDate: "November 18, 1962",
            berthPlace: "San Francisco, California, USA",
            description: "Lead guitarist of Metallica, joined the band in 1983 and contributed to many iconic solos. An elite heavy metal guitarist whose fleet, ferocious, and fluid playing style helped define the Bay Area thrash sound, Kirk Hammett co-founded speed/thrash luminaries Exodus before becoming the lead guitarist for Metallica. Making his debut on 1983's Kill 'Em All, Hammett has appeared on every one of the group's albums and has written some of their most iconic riffs, including 1991's platinum-certified Enter Sandman. In 2022, Hammett issued his debut solo effort, Portals, a wide-ranging set of cinematic instrumentals that paired virtuosic shredding with eerie orchestral soundscapes.Born in San Francisco and raised in El Sobrante, Kirk Hammett's early passion for horror movies eventually led him to heavy metal. By 16, he was at the forefront of the fledgling Bay Area thrash scene with his band Exodus and appeared on the group's 1982 demo. The following year, Hammett received a phone call from Metallica (singer/guitarist James Hetfield, drummer Lars Ulrich, and bassist Cliff Burton), who were on the cusp of firing their original guitarist, Dave Mustaine, asking if he'd be interested in trying out for the band. The group arranged for Hammett to fly out to their new home base of New York, where he passed the test after a single run-through of their early classic anthem 'Seek & Destroy' with Burton comparing Hammett's playing to such Euro-metal guitarists as Michael Schenker and Ritchie Blackmore -- two of the band's favorite six-stringers. The new lineup quickly began work on their debut album, Kill 'Em All, issued the same year."
        }
        return (
            <div className="container-group-member container-group-member-style">
                <div className="block-group-member-photo">
                    <img src={groupMemberPhoto3} alt="group member photo"></img>
                </div>
                <div className="block-group-member-info">
                    <p><strong>{groupMember.name}</strong></p>
                    <p>Born: {groupMember.berthDate}</p>
                    <p>Place of berth: {groupMember.berthPlace}</p>
                </div>
                <div className="block-group-member-description">
                    <p>{groupMember.description}</p>
                </div>
            </div>
        );
    }
}

export class MyHWComponentGroupMember4 extends React.Component{
    render(){        
        const groupMember = {
            name: "Robert Trujillo",
            berthDate: "October 23, 1964",
            berthPlace: "Santa Monica, California, USA",
            description: "Bassist for Metallica, joined in 2003, known for his energetic performances. Trujillo gained prominence when he replaced Bob Heathcote as the bassist for California crossover thrash band Suicidal Tendencies. Initially billed as 'Stymee' on the 1989 album Controlled by Hatred/Feel Like Shit...Déjà Vu, Trujillo remained in the band until the mid-1990s. Concurrent to his work with Suicidal Tendencies, Trujillo is a member of the band's side project, Infectious Grooves, along with vocalist Mike Muir Trujillo was a member of Ozzy Osbourne's band for a number of years starting in the late 1990s. In contrast to his earlier jazz and funk inspired playing, Osbourne's band was more straightforward hard rock and metal.[8] Trujillo co-wrote several songs on the Down to Earth album.[8] He was the subject of controversy for re-recording Bob Daisley's bass tracks for reissued versions of Osbourne's first two solo albums Blizzard of Ozz (1980) and Diary of a Madman (1981) after Daisley claimed that he was not paid proper royalties.[9] During this time, Trujillo formed an experimental supergroup, Mass Mental, with then Dub War singer Benji Webbe, whose 'ragga-punk-metal' outfit had just disbanded. The band released one studio album in Japan and one live album of their performance in Tokyo before disbanding.[10] Zakk Wylde, a personal friend and bandmate from the Ozzy days, recruited him to play with Black Label Society for a few shows."
        }
        return (
            <div className="container-group-member container-group-member-style">
                <div className="block-group-member-photo">
                    <img src={groupMemberPhoto4} alt="group member photo"></img>
                </div>
                <div className="block-group-member-info">
                    <p><strong>{groupMember.name}</strong></p>
                    <p>Born: {groupMember.berthDate}</p>
                    <p>Place of berth: {groupMember.berthPlace}</p>
                </div>
                <div className="block-group-member-description">
                    <p>{groupMember.description}</p>
                </div>
            </div>
        );
    }
}

export class MyHWComponentGroupAlbum1 extends React.Component{
    render(){        
        const groupAlbum = {
            title: "Ride the Lightning",
            releaseDate: "July 27, 1984",
            recordingDate: "1984",
            duration: "47:22",
            style: "Heavy Metal, Speed/Thrash Metal, Hard Rock",
            recordingLocation: "Sweet Silence Studio, Copenhagen, Denmark"
        }
        return (            
                <div className="container-album">
                    <img src={groupAlbumPhoto1} alt="group album photo"></img>                
                    <p><strong>{groupAlbum.title}</strong></p>
                    <p>Release Date: {groupAlbum.releaseDate}</p>
                    <p>Recording Date: {groupAlbum.recordingDate}</p>
                    <p>Duration: {groupAlbum.style}</p>
                    <p>Style: {groupAlbum.recordingLocation}</p>
                </div>                            
        );
    }
}

export class MyHWComponentGroupAlbum2 extends React.Component{
    render(){        
        const groupAlbum = {
            title: "Ride the Lightning",
            releaseDate: "July 27, 1984",
            recordingDate: "1984",
            duration: "47:22",
            style: "Heavy Metal, Speed/Thrash Metal, Hard Rock",
            recordingLocation: "Sweet Silence Studio, Copenhagen, Denmark"
        }
        return (            
                <div className="container-album">
                    <img src={groupAlbumPhoto2} alt="group album photo"></img>                
                    <p><strong>{groupAlbum.title}</strong></p>
                    <p>Release Date: {groupAlbum.releaseDate}</p>
                    <p>Recording Date: {groupAlbum.recordingDate}</p>
                    <p>Duration: {groupAlbum.style}</p>
                    <p>Style: {groupAlbum.recordingLocation}</p>
                </div>                            
        );
    }
}

export class MyHWComponentGroupAlbum3 extends React.Component{
    render(){        
        const groupAlbum = {
            title: "Ride the Lightning",
            releaseDate: "July 27, 1984",
            recordingDate: "1984",
            duration: "47:22",
            style: "Heavy Metal, Speed/Thrash Metal, Hard Rock",
            recordingLocation: "Sweet Silence Studio, Copenhagen, Denmark"
        }
        return (            
                <div className="container-album">
                    <img src={groupAlbumPhoto3} alt="group album photo"></img>                
                    <p><strong>{groupAlbum.title}</strong></p>
                    <p>Release Date: {groupAlbum.releaseDate}</p>
                    <p>Recording Date: {groupAlbum.recordingDate}</p>
                    <p>Duration: {groupAlbum.style}</p>
                    <p>Style: {groupAlbum.recordingLocation}</p>
                </div>                            
        );
    }
}

export class MyHWComponentGroupAlbum4 extends React.Component{
    render(){        
        const groupAlbum = {
            title: "Ride the Lightning",
            releaseDate: "July 27, 1984",
            recordingDate: "1984",
            duration: "47:22",
            style: "Heavy Metal, Speed/Thrash Metal, Hard Rock",
            recordingLocation: "Sweet Silence Studio, Copenhagen, Denmark"
        }
        return (            
                <div className="container-album">
                    <img src={groupAlbumPhoto4} alt="group album photo"></img>                
                    <p><strong>{groupAlbum.title}</strong></p>
                    <p>Release Date: {groupAlbum.releaseDate}</p>
                    <p>Recording Date: {groupAlbum.recordingDate}</p>
                    <p>Duration: {groupAlbum.style}</p>
                    <p>Style: {groupAlbum.recordingLocation}</p>
                </div>                            
        );
    }
}