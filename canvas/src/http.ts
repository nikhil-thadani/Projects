export class SendRequest {
  private data: any[] = [];
  private getData() {
    return this.data;
  }
  private setData(p: object) {
    this.data.push(p);
  }
  fetchData = async () => {
    const response = await fetch(
      `https://covid-19-coronavirus-statistics2.p.rapidapi.com/countriesData`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-coronavirus-statistics2.p.rapidapi.com",
          "x-rapidapi-key":
            "f978026baemsh05e1104ea025665p14e7e1jsnab4674ce7e6a",
        },
      }
    )
      .then((res) => res.json())
      // .then((rec) => console.log(rec.result[0]))
      .then((rec) => {
        return rec.result.map((d: any) => this.setData(d));
      })
      .catch((err: any) => console.error(err));
    return this.getData();
  };
}
