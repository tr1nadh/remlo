let headingElement;
let headingSubElement;

$(document).ready(function() {
    headingElement = $('#headingText');
    headingSubElement = $('#headingSubtext');

    let headText = headingElement.text();
    if (headText.startsWith('Sign in to ')) {
        let appName = headText.replace('Sign in to ', '');
        const emailElement = $('.SOeSgb').first();
        let selectedEmail = emailElement.text();
        chrome.storage.local.set({[appName]: selectedEmail });
    }

    const headSubText = headingSubElement.text();
    let headSubValue = headSubText.replace('to continue to ', '');
    if (headSubText.startsWith('to continue to ')) {
        chrome.storage.local.get(headSubValue, function(result) {
            let prevEmail = result[headSubValue];
            $('.VV3oRb').each(function() {
                if (prevEmail) {
                    let dataIdentifier = $(this).attr('data-identifier');
                    if (dataIdentifier === prevEmail) {
                        $(this).parent().prepend(`<p style="font-weight: bold; color: #000;
                            ">Previous logged in account</p>`);
                        $(this).parent().css({
                            'border': '2px solid #000',
                            'border-radius': '8px',
                            'padding': '10px 30px',
                            'margin-bottom': '10px',
                            'display': 'flex',
                            'flex-direction': 'column',
                            'gap': '10px'
                        });
                    }
                }
                $(this).parent().addClass('rm_ac_sl');
            })
        });
    }

});

$(document).on('click', 'li.rm_ac_sl', function() {
    rm_ac_sl(this);
});


function rm_ac_sl(element) {
    var childElement = $(element).find('.VV3oRb');
    var selectedEmail = childElement.attr('data-identifier');
    const headSubText = headingSubElement.text();
    let appName = headSubText.replace('to continue to ', '');
    chrome.storage.local.set({[appName]: selectedEmail });
}