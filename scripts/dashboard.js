let allIssuesData = [];


const loadAllIssues = async ()=>{
    const response = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data =await response.json();
    allIssuesData=data.data;
    displayIssues(allIssuesData);
    // console.log(data);
 };
    const displayIssues = (issues) => {
    const Cards = document.getElementById('card');
    Cards.innerHTML="";

        const issueCountElement = document.getElementById('issue-count');
        issueCountElement.innerText = `${issues.length} Issues`;

    issues.forEach(issue => {
        console.log(issue);
        let BorderColor="";
        let statusIcon = "";
        if (issue.status === "open" ){
            BorderColor=  "border-t-4 border-green-500 rounded-t-lg";
            statusIcon ="Open-Status.png";
        }
        else{
            BorderColor=  "border-t-4 border-purple-500 rounded-t-lg";
            statusIcon = "Closed-Status.png"
        }

        let priorityBG = "";
        let priorityText = "";

        if(issue.priority === 'high'){
            priorityBg = "bg-red-100";
            priorityText = "text-red-500";
        }
        else if(issue.priority==='medium'){
            priorityBg = "bg-yellow-100";
            priorityText = "text-yellow-600";

        }

        else{
            priorityBg = "bg-gray-200";
            priorityText = "text-neutral/50";
        }

        const cardStyle=`<div class="card bg-white shadow-lg ${BorderColor}">
                <div class="flex justify-between items-center px-4 pt-4">                
                        <img src="./assets/${statusIcon}" alt="">
                        <a href="" class="btn btn-xs rounded-full border-none font-bold ${priorityBg} ${priorityText}">${issue.priority}</a>
                </div>
                <div class="px-4 pt-4">
                    <h2 class="text-base font-semibold">${issue.title}</h2>
                    <p class="text-sm text-neutral/50">${issue.description}</p>
                </div>
                <div class="flex justify-between px-4 py-4 border-b border-gray-200">
                    <button class="btn btn-xs btn-soft btn-error border border-red-300 rounded-full"><svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.56328 1.48363L8.08547 0.961913C8.13779 0.90959 8.1793 0.847473 8.20762 0.779109C8.23593 0.710745 8.25051 0.637472 8.25051 0.563476C8.25051 0.489479 8.23593 0.416207 8.20762 0.347843C8.1793 0.279479 8.13779 0.217362 8.08547 0.165038C8.03315 0.112715 7.97103 0.0712093 7.90267 0.042892C7.8343 0.0145747 7.76103 -9.54911e-10 7.68703 0C7.61304 9.54911e-10 7.53976 0.0145747 7.4714 0.042892C7.40304 0.0712093 7.34092 0.112715 7.2886 0.165038L6.71906 0.736913C6.00803 0.257538 5.17004 0.00143445 4.3125 0.00143445C3.45497 0.00143445 2.61697 0.257538 1.90594 0.736913L1.33547 0.165976C1.2298 0.0603035 1.08648 0.000937521 0.937033 0.000937521C0.78759 0.000937521 0.644268 0.0603035 0.538596 0.165976C0.432923 0.271648 0.373557 0.41497 0.373557 0.564413C0.373557 0.713856 0.432923 0.857178 0.538596 0.962851L1.06172 1.48363C0.37636 2.26714 -0.000957759 3.27298 1.8258e-06 4.31394V6.18894C1.8258e-06 7.33269 0.454353 8.42959 1.2631 9.23834C2.07185 10.0471 3.16876 10.5014 4.3125 10.5014C5.45625 10.5014 6.55315 10.0471 7.3619 9.23834C8.17065 8.42959 8.625 7.33269 8.625 6.18894V4.31394C8.62596 3.27298 8.24864 2.26714 7.56328 1.48363ZM7.5 4.31394V4.50144H1.125V4.31394C1.125 3.46857 1.46083 2.65781 2.0586 2.06004C2.65637 1.46227 3.46712 1.12644 4.3125 1.12644C5.15788 1.12644 5.96863 1.46227 6.56641 2.06004C7.16418 2.65781 7.5 3.46857 7.5 4.31394ZM4.3125 9.37644C3.46739 9.37558 2.65714 9.03947 2.05956 8.44189C1.46197 7.8443 1.12587 7.03406 1.125 6.18894V5.62644H7.5V6.18894C7.49913 7.03406 7.16303 7.8443 6.56545 8.44189C5.96786 9.03947 5.15761 9.37558 4.3125 9.37644ZM4.875 3.18894C4.875 3.04061 4.91899 2.8956 5.0014 2.77227C5.08381 2.64893 5.20094 2.5528 5.33799 2.49603C5.47503 2.43927 5.62583 2.42442 5.77132 2.45336C5.91681 2.48229 6.05044 2.55373 6.15533 2.65861C6.26022 2.7635 6.33165 2.89714 6.36059 3.04263C6.38953 3.18811 6.37468 3.33891 6.31791 3.47596C6.26115 3.613 6.16502 3.73014 6.04168 3.81255C5.91834 3.89496 5.77334 3.93894 5.625 3.93894C5.42609 3.93894 5.23532 3.85993 5.09467 3.71927C4.95402 3.57862 4.875 3.38786 4.875 3.18894ZM2.25 3.18894C2.25 3.04061 2.29399 2.8956 2.3764 2.77227C2.45881 2.64893 2.57594 2.5528 2.71299 2.49603C2.85003 2.43927 3.00083 2.42442 3.14632 2.45336C3.29181 2.48229 3.42544 2.55373 3.53033 2.65861C3.63522 2.7635 3.70665 2.89714 3.73559 3.04263C3.76453 3.18811 3.74968 3.33891 3.69291 3.47596C3.63615 3.613 3.54002 3.73014 3.41668 3.81255C3.29334 3.89496 3.14834 3.93894 3 3.93894C2.80109 3.93894 2.61032 3.85993 2.46967 3.71927C2.32902 3.57862 2.25 3.38786 2.25 3.18894Z" fill="#EF4444"/>
                    </svg>Bug
                </button>
                    <button class="btn btn-xs btn-soft btn-warning border border-amber-300 rounded-full"><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.0625 0C4.06123 0 3.08245 0.29691 2.24993 0.853185C1.4174 1.40946 0.768531 2.20011 0.385362 3.12516C0.00219351 4.05022 -0.0980609 5.06812 0.0972768 6.05014C0.292614 7.03217 0.774771 7.93423 1.48277 8.64223C2.19078 9.35023 3.09283 9.83239 4.07486 10.0277C5.05689 10.2231 6.07479 10.1228 6.99984 9.73964C7.92489 9.35647 8.71554 8.7076 9.27182 7.87507C9.82809 7.04255 10.125 6.06377 10.125 5.0625C10.1235 3.7203 9.58967 2.4335 8.64059 1.48442C7.69151 0.535336 6.4047 0.00148885 5.0625 0ZM7.13672 6.34125C7.3742 5.957 7.49998 5.51421 7.49998 5.0625C7.49998 4.61079 7.3742 4.168 7.13672 3.78375L8.21485 2.70563C8.72451 3.38569 9 4.21265 9 5.0625C9 5.91235 8.72451 6.73931 8.21485 7.41937L7.13672 6.34125ZM3.75 5.0625C3.75 4.80291 3.82698 4.54915 3.9712 4.33331C4.11542 4.11747 4.3204 3.94925 4.56023 3.84991C4.80006 3.75057 5.06396 3.72458 5.31856 3.77522C5.57316 3.82586 5.80702 3.95087 5.99058 4.13442C6.17414 4.31798 6.29914 4.55184 6.34978 4.80644C6.40043 5.06104 6.37443 5.32494 6.27509 5.56477C6.17575 5.8046 6.00753 6.00958 5.79169 6.1538C5.57585 6.29802 5.32209 6.375 5.0625 6.375C4.71441 6.375 4.38057 6.23672 4.13442 5.99058C3.88828 5.74444 3.75 5.4106 3.75 5.0625ZM7.41938 1.91016L6.34125 2.98828C5.957 2.7508 5.51421 2.62502 5.0625 2.62502C4.61079 2.62502 4.168 2.7508 3.78375 2.98828L2.70563 1.91016C3.38569 1.40049 4.21265 1.125 5.0625 1.125C5.91236 1.125 6.73931 1.40049 7.41938 1.91016ZM1.91016 2.70703L2.98828 3.78516C2.75081 4.16941 2.62502 4.61219 2.62502 5.06391C2.62502 5.51562 2.75081 5.95841 2.98828 6.34266L1.91016 7.42078C1.40049 6.74072 1.125 5.91376 1.125 5.06391C1.125 4.21405 1.40049 3.3871 1.91016 2.70703ZM2.70703 8.21625L3.78516 7.13812C4.16941 7.3756 4.6122 7.50139 5.06391 7.50139C5.51562 7.50139 5.95841 7.3756 6.34266 7.13812L7.42078 8.21625C6.74072 8.72592 5.91376 9.00141 5.06391 9.00141C4.21405 9.00141 3.3871 8.72592 2.70703 8.21625Z" fill="#D97706"/>
                        </svg>help wanted
                    </button>
                </div>

                <div class="p-4">
                    <p class="text-xs text-neutral/50">#${issue.id} by ${issue.author}</p>
                    <p class="text-xs text-neutral/50">${issue.createdAt}</p>
                </div>

            </div>
        
        `

        Cards.innerHTML += cardStyle;


    });
};
loadAllIssues();


const Allbtn=document.getElementById('btn-all');
const Openbtn=document.getElementById('btn-open');
const Closebtn=document.getElementById('btn-closed');

const setActiveButton = (activeBtn) =>{
    Allbtn.classList.remove('bg-purple-600', 'text-white');
    Openbtn.classList.remove('bg-purple-600', 'text-white');
    Closebtn.classList.remove('bg-purple-600', 'text-white');

    activeBtn.classList.add('bg-purple-600', 'text-white');
};

Allbtn.addEventListener('click', (event) => {
    event.preventDefault();
    displayIssues(allIssuesData);
    setActiveButton(Allbtn);
});

Openbtn.addEventListener('click', (event)=>{
    event.preventDefault();
    setActiveButton(Openbtn);
    const openIssues = allIssuesData.filter(issue => issue.status=== "open");
    displayIssues(openIssues);
});
Closebtn.addEventListener('click', (event)=>{
    event.preventDefault();

    const closeIssues = allIssuesData.filter(issue=> issue.status ==="closed");

    displayIssues(closeIssues);
    setActiveButton(Closebtn);
});
setActiveButton(Allbtn);

