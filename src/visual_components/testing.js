// ^ Wakelock code


    // const canWakeLock = () => 'wakeLock' in navigator;
    // let wakelock;
    // async function lockWakeState() {
    //     if (!canWakeLock()) return;
    //     try {
    //         wakelock = await navigator.wakeLock.request();
    //         wakelock.addEventListener('release', () => {
    //             console.log('Screen Wake State Locked:', !wakelock.released);
    //         });
    //         console.log('Screen Wake State Locked:', !wakelock.released);
    //     } catch (e) {
    //         console.error('Failed to lock wake state with reason:', e.message);
    //     }
    // }

    // const stayWoke = async () => {
    //     await lockWakeState()
    // }

    // const releaseWakeState = () => {
    //     if(wakelock) wakelock.release();
    //     wakelock = null;
    //   }

    // ^ Update meditation length

        // const updateLength = (evt) => {
    //     let currentLength = evt.target.id
    //     let buttons = document.querySelectorAll('.bb')
    //     console.log(buttons)
    //     for (let i = 0; i < buttons.length; i++) {
    //         if (buttons[i].classList.contains('active-btn')) {
    //             buttons[i].classList.remove('active-btn')
    //         }
    //     }
    //     evt.currentTarget.classList.toggle('active-btn')
    //     if (currentLength == 5000) {
    //         let newLength = 5000
    //         animationJSON.fr = 40
    //         setBreathLength(newLength)
    //         setDurationDisplay(duration/2)
    //         console.log(newLength)
    //     } else if (currentLength == 2500) {
    //         let newLength = 2500
    //         animationJSON.fr = 60
    //         console.log(animationJSON.fr)
    //         setBreathLength(newLength)
    //         setDurationDisplay(duration)
    //         console.log(newLength)
    //     }

    //     // setDuration(newLength)
    //     // setDurationDisplay(newDuration)
    // }
