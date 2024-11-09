const form = {
  _count: 1,
  
  incrementCount() {
    this._count++;
    return this._count;
  },

  submitForm(event) {
    event.preventDefault();
    let info = {
      fees: this.totalFees(),
      adultName: document.getElementById("adult_name").value,
      participantCount: this._count,
    };

    const loadingAnimation = document.createElement("div");
    loadingAnimation.classList.add("loading-animation");
    document.body.appendChild(loadingAnimation);

    document.querySelector("form").style.display = "none";

    setTimeout(() => {
      loadingAnimation.remove();
      let template = this.successTemplate(info);
      const summary = document.getElementById("summary");
      summary.insertAdjacentHTML("afterbegin", template);
    }, 2000);
  },

  participantTemplate(count) {
    const template = `
    <section class="participant${count}">
      <p>Participant ${count}</p>
      <div class="item">
        <label for="fname${count}">First Name<span>*</span></label>
        <input id="fname${count}" type="text" name="fname${count}" value="" required />
      </div>
      <div class="item activities">
        <label for="activity${count}">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity${count}" />
      </div>
      <div class="item">
        <label for="fee${count}">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee${count}" />
      </div>
      <div class="item">
        <label for="date${count}">Desired Date <span>*</span></label>
        <input id="date${count}" type="date" name="date${count}" />
      </div>
      <div class="item">
        <p>Grade</p>
        <select>
          <option selected value="" disabled selected></option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="11">11th</option>
          <option value="12">12th</option>
        </select>
      </div>
    </section>
    `;
    const addButton = document.getElementById("add");
    addButton.insertAdjacentHTML("beforebegin", template);
  },

  successTemplate(info) {
    return `
      <p>Thank you ${info.adultName} for registering.</p>
      <p>You have registered ${info.participantCount} participants and owe $${info.fees} in Fees.</p>
    `;
  },

  totalFees() {
    let total = 0;
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements.forEach(element => {
      if (element.value) {
        total += parseFloat(element.value);
      }
    });
    return total.toLocaleString();
  }
};

export default form;