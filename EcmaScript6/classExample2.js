class Random {
  fakeApi() {
    const success = true
    return new Promise((resolve, reject) => {
      if (success) {
        setTimeout(() => resolve("Data loaded"), 5000);
      } else {
        setTimeout(() => reject("Failure"), 5000);
      }
    });
  }

  async fetchData() {
    try {
      console.log("Fetching...");
      let result = await this.fakeApi();
      console.log(result);
    } catch (err) {
      console.log(err)
    } finally {
      console.log('finally block')
    }
  }
}


const r1 = new Random()
r1.fetchData()

r1.calculate()
