<span class="nav"><%*  
    const { Campaign } = window.customJS;
    const result = await Campaign.prevNext(tp);
    if ( result.prev ) {
        tR += result.prev; 
    } else {
        tR += "<span>✧</span>";
    }
    tR += " ~ ❦ ~ ";
    if ( result.next ) {
        tR += result.next; 
    } else {
        tR += "<span>✧</span>";
    }
-%></span>
