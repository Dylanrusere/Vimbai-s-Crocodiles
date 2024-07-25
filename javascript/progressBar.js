const circularProgress = document.querySelector(".circular-progress");
const progressValue = document.querySelector(".progress-value");
let progressStartValue = 0;
const progressEndValue = 95;
const speed = 100;

const circularProgress2 = document.querySelector(".circular-progress-2");
const progressValue2 = document.querySelector(".progress-value-2");
let progressStartValue2 = 0;
const progressEndValue2 = 93;
const speed2 = 100;

const circularProgress3 = document.querySelector(".circular-progress-3");
const progressValue3 = document.querySelector(".progress-value-3");
let progressStartValue3 = 0;
const progressEndValue3 = 90;
const speed3 = 100;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#F7C35F ${progressStartValue * 3.6}deg, #ffffff 0deg)`;

        if (progressStartValue === progressEndValue) {
          clearInterval(progress);
        }
      }, speed);

      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observer.observe(circularProgress);


const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let progress2 = setInterval(() => {
          progressStartValue2++;
          progressValue2.textContent = `${progressStartValue2}%`;
          circularProgress2.style.background = `conic-gradient(#F7C35F ${progressStartValue2 * 3.6}deg, #ffffff 0deg)`;
  
          if (progressStartValue2 === progressEndValue2) {
            clearInterval(progress2);
          }
        }, speed2);
  
        observer2.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  observer2.observe(circularProgress2);


  const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let progress3 = setInterval(() => {
          progressStartValue3++;
          progressValue3.textContent = `${progressStartValue3}%`;
          circularProgress3.style.background = `conic-gradient(#F7C35F ${progressStartValue3 * 3.6}deg, #ffffff 0deg)`;
  
          if (progressStartValue3 === progressEndValue3) {
            clearInterval(progress3);
          }
        }, speed3);
  
        observer3.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  observer3.observe(circularProgress3);