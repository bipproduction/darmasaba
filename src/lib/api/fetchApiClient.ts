export const fetchApiClient = {
  host: "",
  init(host: string) {
    this.host = host;
  },

  /**
   *  [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/test/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/test/route.ts)
   *  @param {}
   *  @param {string} searchParams ?key=value
   */
  async test({ searchParams }: { searchParams?: string }) {
    return fetch(`${this.host}/api/test${searchParams || ""}`, {
      method: "GET",
    });
  },
};
