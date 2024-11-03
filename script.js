let currentAudio = null;
        let prevButton = null;
        const seisyun = new Audio('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/56/d6/e6/56d6e678-4114-34b8-a1a0-bc44d9b26eae/mzaf_1669193967732774347.plus.aac.ep.m4a');
        const distortion = new Audio('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/f8/07/68/f807684c-232a-d904-a856-b20ea41fd10a/mzaf_755862711468711643.plus.aac.ep.m4a');
        const karakara = new Audio('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/8d/ce/1f/8dce1f5b-2f75-9ca9-7088-09e747b5a0d6/mzaf_15643200297576613584.plus.aac.ep.m4a');
        const guitar = new Audio('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/0a/ea/2e/0aea2efc-cf2f-0725-5576-ebf1731754b1/mzaf_16344731491388167704.plus.aac.ep.m4a');
        const whatswrong = new Audio('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/7c/cb/fe/7ccbfe17-6fcc-b904-3a50-ca70b8fe2052/mzaf_7857469202857200578.plus.aac.ep.m4a');
        const thatband = new Audio('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/82/41/b7/8241b7ba-c69a-6561-298d-d21d49d01a44/mzaf_832811603779787274.plus.aac.ep.m4a');
        const rocknroll = new Audio('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/4d/cc/da/4dccda90-d64c-9404-c1d9-ad36080825a5/mzaf_1350918247683368352.plus.aac.ep.m4a');
        const neverforget = new Audio('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/da/7e/ad/da7ead7b-ff06-0319-e3c5-f81e0dfc0919/mzaf_2203519224295480461.plus.aac.ep.m4a');
        const constellation = new Audio('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/6a/5a/be/6a5abeba-0606-59af-3eef-394aacce421b/mzaf_11954643962012379484.plus.aac.ep.m4a');
        const intolight = new Audio('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/9c/e1/8f/9ce18fbe-8bd1-5ce2-97e5-63878d79b921/mzaf_5550783289380892265.plus.aac.ep.m4a');
        const bluespring = new Audio('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/1b/54/c3/1b54c322-a3e0-daa1-7f59-1a95452a50ed/mzaf_6444975174621346178.plus.aac.ep.m4a');
        const hitoribocchi = new Audio('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/20/5d/98/205d986a-7193-a6bf-d735-f3153ec7f057/mzaf_2684835232791617906.plus.aac.ep.m4a');

        function playAudio(button, audio) {
          if (currentAudio !== null) {
            if (button === prevButton) {
              currentAudio.pause();
              button.innerHTML = '<img src="play_icon.png" width="16px" height="16px" alt="Play">';
              currentAudio = null;
              prevButton = null;
              return;
            }
    
            currentAudio.pause();
            prevButton.innerHTML = '<img src="play_icon.png" width="16px" height="16px" alt="Play">';
          }
    
          currentAudio = audio;
    
          audio.play();
          button.innerHTML = '<img src="pause_icon.png" width="16px" height="16px" alt="Pause">';
          prevButton = button;
    
          audio.addEventListener('ended', () => {
            button.innerHTML = '<img src="play_icon.png" width="16px" height="16px" alt="Play">';
          });
        }