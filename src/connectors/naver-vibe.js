'use strict';

Connector.playerSelector = '#player';

// 아티스트명조유진(체리필터), 박기영
Connector.artistSelector = '.song_info .artist';

// 재생 중인 곡명나에게로의 초대 (이상한 나라의 앨리스, 하트다 하트여왕)
Connector.trackSelector = '.song_info .song';

// 앨범명
//                   복면가왕 89회
//                 
Connector.albumSelector = '.option_area .ly_info_album';


// 아티스트명
//                   조유진(체리필터)
//                       
Connector.albumArtistSelector = 'option_area .ly_info_artist';

// 재생된 시간
//        00:48
//      
Connector.currentTimeSelector = '.now';

// 전체 재생 시간
//        04:06
//      
Connector.durationSelector = '.remain';

Connector.pauseButtonSelector = '#btn_now.btn_now.play';

Connector.trackArtSelector = '.thumb_cover > img';

Connector.getCurrentTime = () => {
	const currentTime = Util.getTextFromSelectors(this.currentTimeSelector);
	const currentTimeFiltered = filterKorean(currentTime);
	return Util.stringToSeconds(currentTimeFiltered);
};

Connector.getDuration = () => {
	const duration = Util.getTextFromSelectors(this.durationSelector);
	const durationFiltered = filterKorean(duration);
	return Util.stringToSeconds(durationFiltered);
};

const filter = new MetadataFilter({
    album: filterKorean,
    artist: filterKorean,
    albumArtist: filterKorean
});

function filterKorean(text) {
	const regex = /[가-힣ㄱ-ㅎㅏ-ㅣ ]+\n?\s*(.*)\s*/gm;
	return text.replace(regex, '$1');
}

Connector.applyFilter(filter);
