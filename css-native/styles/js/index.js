// CLICK ON SEARCH INDICATOR
document.getElementById('search-indicator').addEventListener('click', function() {
    document.getElementById('nav').style.display = 'none';
    document.getElementById('main').style.paddingBottom = '30px';
    document.getElementById('main').getElementsByTagName('h3')[0].style.display = 'none';
    document.getElementById('section').style.cssText = 'padding: 15px 15px calc(2rem + 10px); border-radius: 8px; box-shadow: 0px 7px 41px rgba(0, 0, 0, 0.05); background-color: #fff; margin-bottom: 20px;';
    document.getElementById('search-indicator').style.display = 'none';
    document.getElementsByClassName('section-search-input')[0].style.cssText = 'width: 100%';
    document.getElementsByClassName('section-search-input')[0].getElementsByTagName("span")[0].innerHTML = '<svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8894 8.37842C8.95603 12.8897 5.73368 18.0455 5.73368 18.0455C5.73368 18.0455 2.51133 12.8897 0.577915 8.37842C-1.3555 3.86713 1.86686 0.000305176 5.73368 0.000305176C9.6005 0.000305176 12.8229 3.86713 10.8894 8.37842Z" fill="#019765"/><path d="M5.73364 8.37775C7.15737 8.37775 8.31153 7.22359 8.31153 5.79987C8.31153 4.37614 7.15737 3.22198 5.73364 3.22198C4.30992 3.22198 3.15576 4.37614 3.15576 5.79987C3.15576 7.22359 4.30992 8.37775 5.73364 8.37775Z" fill="white"/></svg>';
    document.getElementsByClassName('section-range')[0].style.display = 'flex';
    document.getElementById('aside').style.display = 'none';
});

// CLICK OFF SEARCH INDICATOR
document.getElementsByClassName('section-range')[0].getElementsByTagName('button')[0].addEventListener('click', function() {
    document.getElementById('nav').style.display = 'flex';
    document.getElementById('main').style.paddingBottom = '100px';
    document.getElementById('main').getElementsByTagName('h3')[0].style.display = 'block';
    document.getElementById('section').style.cssText = 'padding: unset; border-radius: unset; box-shadow: unset; background-color: unset; margin-bottom: 0px;';
    document.getElementById('search-indicator').style.display = 'flex';
    document.getElementsByClassName('section-search-input')[0].style.cssText = 'width: calc(85% - 10px)';
    document.getElementsByClassName('section-search-input')[0].getElementsByTagName("span")[0].innerHTML = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8816 11.9013C14.0031 10.4555 14.5316 8.63669 14.3597 6.815C14.1878 4.99331 13.3283 3.30553 11.9562 2.09504C10.584 0.884545 8.80222 0.242262 6.97331 0.298856C5.1444 0.35545 3.40574 1.10667 2.11105 2.39969C0.815229 3.6936 0.0615531 5.43293 0.00360651 7.26323C-0.0543401 9.09354 0.587804 10.8771 1.79918 12.2503C3.01056 13.6236 4.7 14.4833 6.52322 14.6543C8.34645 14.8252 10.1662 14.2945 11.6118 13.1703L11.6504 13.2107L15.4655 17.0267C15.549 17.1102 15.6482 17.1765 15.7574 17.2217C15.8666 17.267 15.9836 17.2902 16.1017 17.2902C16.2199 17.2902 16.3369 17.267 16.4461 17.2217C16.5553 17.1765 16.6545 17.1102 16.738 17.0267C16.8216 16.9431 16.8879 16.8439 16.9331 16.7347C16.9783 16.6256 17.0016 16.5085 17.0016 16.3904C17.0016 16.2722 16.9783 16.1552 16.9331 16.046C16.8879 15.9368 16.8216 15.8376 16.738 15.7541L12.9221 11.9391C12.909 11.9261 12.8955 11.9135 12.8816 11.9013ZM11.0146 3.67226C11.5224 4.17183 11.9262 4.76699 12.2028 5.42341C12.4794 6.07984 12.6233 6.78453 12.6262 7.49685C12.6291 8.20916 12.491 8.915 12.2197 9.57365C11.9484 10.2323 11.5495 10.8307 11.0458 11.3344C10.5421 11.8381 9.94367 12.2371 9.28502 12.5083C8.62636 12.7796 7.92052 12.9178 7.20821 12.9149C6.49589 12.912 5.7912 12.768 5.13478 12.4914C4.47835 12.2148 3.88319 11.811 3.38362 11.3032C2.38528 10.2885 1.82834 8.92035 1.83414 7.49685C1.83994 6.07334 2.40799 4.70979 3.41457 3.70321C4.42115 2.69663 5.7847 2.12858 7.20821 2.12278C8.63171 2.11698 9.99984 2.67392 11.0146 3.67226Z" fill="#A4A4A4"/></svg>';
    document.getElementsByClassName('section-range')[0].style.display = 'none';
    document.getElementById('aside').style.display = 'flex';
});