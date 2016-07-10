var timer = (function(){
    var interval_id = null;
    var thr,ohr,tmin,omin,tsec,osec;
    var hval2, hval1, mval2, mval1, secval2, secval1;
    
    function clockWork(){
        secval1++;
        if(secval1 === 10){
            secval1 = 0;
            secval2++;
            if(secval2 === 6 && secval1 === 0){
                secval2 = 0;
                mval1++;
                if(mval1 === 10){
                    mval1 = 0;
                    mval2++;
                    if(mval2 === 6 && mval1 === 0){
                        mval2 = 0;
                        hval1++;
                        if(hval1 === 10){
                            hval1 = 0;
                            hval2++;
                            if(hval2 === 2 && hval1 === 4){
                                reset();
                            }
                            thr.innerHTML = hval2;
                        }
                        ohr.innerHTML = hval1;
                    }
                    tmin.innerHTML = mval2;
                }
                omin.innerHTML = mval1;
            }
            tsec.innerHTML = secval2;
        }
        osec.innerHTML = secval1;
    }
    
    function pause(){
        if(interval_id != null){
            clearInterval(interval_id);
            interval_id = null;
        }
    }
    
    function reset(){
        thr.innerHTML = 0; 
        ohr.innerHTML = 0;
        tmin.innerHTML = 0;
        omin.innerHTML = 0;
        tsec.innerHTML = 0;
        osec.innerHTML = 0;
        hval2 = 0;
        hval1 = 0;
        mval2 = 0;
        mval1 = 0; 
        secval2 = 0;
        secval1 = 0;
        clearInterval(interval_id);
        interval_id = null;
    }
    
    function start(){    
        if(interval_id === null){
            interval_id = setInterval(clockWork, 1000);
        }
    }
    
    function init(){
        thr = document.getElementById('thr');
        ohr = document.getElementById('ohr');
        tmin = document.getElementById('tmin');
        omin = document.getElementById('omin');
        tsec = document.getElementById('tsec');
        osec = document.getElementById('osec');

        reset();
        var resetB = document.getElementById('reset');
        var startB = document.getElementById('start');
        var pauseB = document.getElementById('pause');
        
        secval1 = osec.innerHTML;
        secval2 = tsec.innerHTML;
        mval1 = omin.innerHTML;
        mval2 = tmin.innerHTML;
        hval1 = ohr.innerHTML;
        hval2 = thr.innerHTML;
        
        startB.addEventListener('click',start);
        resetB.addEventListener('click',reset);
        pauseB.addEventListener('click',pause);
    }
    
    return {
        init: init
    }
})();