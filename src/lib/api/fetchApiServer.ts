export const fetchApiServer = {
  host: "",
  init(host: string) {
    this.host = host;
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/user/logout/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/user/logout/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async userLogout({
    searchParams,
    token,
  }: {
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    let sembarang = {
      data: [],
      success: false,
      message: "",
    };
    try {
      const res = await fetch(
        `${this.host}/api/user/logout${searchParams || ""}`,
        { method: "GET", headers, cache: "no-cache" },
      );
      const json = await res
        .json()
        .then((json) => json)
        .catch((e) => null);
      return json || sembarang;
    } catch (e) {
      console.error(e);
      sembarang.message = "error" + e;
      return sembarang;
    }
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/user/get/token/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/user/get/token/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async userGetToken({
    searchParams,
    token,
  }: {
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    let sembarang = {
      data: [],
      success: false,
      message: "",
    };
    try {
      const res = await fetch(
        `${this.host}/api/user/get/token${searchParams || ""}`,
        { method: "GET", headers, cache: "no-cache" },
      );
      const json = await res
        .json()
        .then((json) => json)
        .catch((e) => null);
      return json || sembarang;
    } catch (e) {
      console.error(e);
      sembarang.message = "error" + e;
      return sembarang;
    }
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/test/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/test/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async test({
    searchParams,
    token,
  }: {
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    let sembarang = {
      data: [],
      success: false,
      message: "",
    };
    try {
      const res = await fetch(`${this.host}/api/test${searchParams || ""}`, {
        method: "GET",
        headers,
        cache: "no-cache",
      });
      const json = await res
        .json()
        .then((json) => json)
        .catch((e) => null);
      return json || sembarang;
    } catch (e) {
      console.error(e);
      sembarang.message = "error" + e;
      return sembarang;
    }
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/otp/send/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/otp/send/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async otpSend({
    body,
    searchParams,
    token,
  }: {
    body?: string;
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    let sembarang = {
      data: [],
      success: false,
      message: "",
    };
    try {
      const res = await fetch(
        `${this.host}/api/otp/send${searchParams || ""}`,
        { method: "POST", headers, body, cache: "no-cache" },
      );
      const json = await res
        .json()
        .then((json) => json)
        .catch((e) => null);
      return json || sembarang;
    } catch (e) {
      console.error(e);
      sembarang.message = "error" + e;
      return sembarang;
    }
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/otp/compare/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/otp/compare/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async otpCompare({
    body,
    searchParams,
    token,
  }: {
    body?: string;
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    let sembarang = {
      data: [],
      success: false,
      message: "",
    };
    try {
      const res = await fetch(
        `${this.host}/api/otp/compare${searchParams || ""}`,
        { method: "POST", headers, body, cache: "no-cache" },
      );
      const json = await res
        .json()
        .then((json) => json)
        .catch((e) => null);
      return json || sembarang;
    } catch (e) {
      console.error(e);
      sembarang.message = "error" + e;
      return sembarang;
    }
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/user-role/list/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/user-role/list/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async developerUserRoleList({
    searchParams,
    token,
  }: {
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    let sembarang = {
      data: [],
      success: false,
      message: "",
    };
    try {
      const res = await fetch(
        `${this.host}/api/developer/user-role/list${searchParams || ""}`,
        { method: "GET", headers, cache: "no-cache" },
      );
      const json = await res
        .json()
        .then((json) => json)
        .catch((e) => null);
      return json || sembarang;
    } catch (e) {
      console.error(e);
      sembarang.message = "error" + e;
      return sembarang;
    }
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/user/list/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/user/list/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async developerUserList({
    searchParams,
    token,
  }: {
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    let sembarang = {
      data: [],
      success: false,
      message: "",
    };
    try {
      const res = await fetch(
        `${this.host}/api/developer/user/list${searchParams || ""}`,
        { method: "GET", headers, cache: "no-cache" },
      );
      const json = await res
        .json()
        .then((json) => json)
        .catch((e) => null);
      return json || sembarang;
    } catch (e) {
      console.error(e);
      sembarang.message = "error" + e;
      return sembarang;
    }
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/jabatan/list/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/jabatan/list/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async developerJabatanList({
    searchParams,
    token,
  }: {
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    let sembarang = {
      data: [],
      success: false,
      message: "",
    };
    try {
      const res = await fetch(
        `${this.host}/api/developer/jabatan/list${searchParams || ""}`,
        { method: "GET", headers, cache: "no-cache" },
      );
      const json = await res
        .json()
        .then((json) => json)
        .catch((e) => null);
      return json || sembarang;
    } catch (e) {
      console.error(e);
      sembarang.message = "error" + e;
      return sembarang;
    }
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/desa/list/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/desa/list/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async developerDesaList({
    searchParams,
    token,
  }: {
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    let sembarang = {
      data: [],
      success: false,
      message: "",
    };
    try {
      const res = await fetch(
        `${this.host}/api/developer/desa/list${searchParams || ""}`,
        { method: "GET", headers, cache: "no-cache" },
      );
      const json = await res
        .json()
        .then((json) => json)
        .catch((e) => null);
      return json || sembarang;
    } catch (e) {
      console.error(e);
      sembarang.message = "error" + e;
      return sembarang;
    }
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/desa/create/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/desa/create/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async developerDesaCreate({
    body,
    searchParams,
    token,
  }: {
    body?: string;
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    let sembarang = {
      data: [],
      success: false,
      message: "",
    };
    try {
      const res = await fetch(
        `${this.host}/api/developer/desa/create${searchParams || ""}`,
        { method: "POST", headers, body, cache: "no-cache" },
      );
      const json = await res
        .json()
        .then((json) => json)
        .catch((e) => null);
      return json || sembarang;
    } catch (e) {
      console.error(e);
      sembarang.message = "error" + e;
      return sembarang;
    }
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/access-role/list-by-user-role-id/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/access-role/list-by-user-role-id/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async developerAccessRoleListByUserRoleId({
    searchParams,
    token,
  }: {
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    let sembarang = {
      data: [],
      success: false,
      message: "",
    };
    try {
      const res = await fetch(
        `${this.host}/api/developer/access-role/list-by-user-role-id${searchParams || ""}`,
        { method: "GET", headers, cache: "no-cache" },
      );
      const json = await res
        .json()
        .then((json) => json)
        .catch((e) => null);
      return json || sembarang;
    } catch (e) {
      console.error(e);
      sembarang.message = "error" + e;
      return sembarang;
    }
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/access-role/list/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/access-role/list/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async developerAccessRoleList({
    searchParams,
    token,
  }: {
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    let sembarang = {
      data: [],
      success: false,
      message: "",
    };
    try {
      const res = await fetch(
        `${this.host}/api/developer/access-role/list${searchParams || ""}`,
        { method: "GET", headers, cache: "no-cache" },
      );
      const json = await res
        .json()
        .then((json) => json)
        .catch((e) => null);
      return json || sembarang;
    } catch (e) {
      console.error(e);
      sembarang.message = "error" + e;
      return sembarang;
    }
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/access-role/create/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/access-role/create/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async developerAccessRoleCreate({
    body,
    searchParams,
    token,
  }: {
    body?: string;
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    let sembarang = {
      data: [],
      success: false,
      message: "",
    };
    try {
      const res = await fetch(
        `${this.host}/api/developer/access-role/create${searchParams || ""}`,
        { method: "POST", headers, body, cache: "no-cache" },
      );
      const json = await res
        .json()
        .then((json) => json)
        .catch((e) => null);
      return json || sembarang;
    } catch (e) {
      console.error(e);
      sembarang.message = "error" + e;
      return sembarang;
    }
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/access-role/assign/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/access-role/assign/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async developerAccessRoleAssign({
    body,
    searchParams,
    token,
  }: {
    body?: string;
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    let sembarang = {
      data: [],
      success: false,
      message: "",
    };
    try {
      const res = await fetch(
        `${this.host}/api/developer/access-role/assign${searchParams || ""}`,
        { method: "POST", headers, body, cache: "no-cache" },
      );
      const json = await res
        .json()
        .then((json) => json)
        .catch((e) => null);
      return json || sembarang;
    } catch (e) {
      console.error(e);
      sembarang.message = "error" + e;
      return sembarang;
    }
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/dashboard/get-user/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/dashboard/get-user/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async dashboardGetUser({
    searchParams,
    token,
  }: {
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    let sembarang = {
      data: [],
      success: false,
      message: "",
    };
    try {
      const res = await fetch(
        `${this.host}/api/dashboard/get-user${searchParams || ""}`,
        { method: "GET", headers, cache: "no-cache" },
      );
      const json = await res
        .json()
        .then((json) => json)
        .catch((e) => null);
      return json || sembarang;
    } catch (e) {
      console.error(e);
      sembarang.message = "error" + e;
      return sembarang;
    }
  },
  paths() {
    return {
      userLogout: `${this.host}/api/user/logout/`,
      userGetToken: `${this.host}/api/user/get/token/`,
      test: `${this.host}/api/test/`,
      otpSend: `${this.host}/api/otp/send/`,
      otpCompare: `${this.host}/api/otp/compare/`,
      developerUserRoleList: `${this.host}/api/developer/user-role/list/`,
      developerUserList: `${this.host}/api/developer/user/list/`,
      developerJabatanList: `${this.host}/api/developer/jabatan/list/`,
      developerDesaList: `${this.host}/api/developer/desa/list/`,
      developerDesaCreate: `${this.host}/api/developer/desa/create/`,
      developerAccessRoleListByUserRoleId: `${this.host}/api/developer/access-role/list-by-user-role-id/`,
      developerAccessRoleList: `${this.host}/api/developer/access-role/list/`,
      developerAccessRoleCreate: `${this.host}/api/developer/access-role/create/`,
      developerAccessRoleAssign: `${this.host}/api/developer/access-role/assign/`,
      dashboardGetUser: `${this.host}/api/dashboard/get-user/`,
    };
  },
};
