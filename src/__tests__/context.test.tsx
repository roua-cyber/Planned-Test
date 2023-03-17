import axios from "axios";
import { Endpoints } from "../consts";
import {
  isAdultsRange,
  isKidsRange,
  isKidssOrAdultRange,
  isKidssOrAdultorSeniorRange,
  isSeniorOrAdultRange,
  isSeniorsRange,
} from "../context/utils";

describe("FETCH_KIDS endpoint", () => {
  it(" Should call FETCH_KIDS endpoint", async () => {
    const Min = 0;
    const Max = 18;
    expect(isKidsRange({ Min, Max })).toBe(true);

    const response = await axios.get(Endpoints.FETCH_KIDS);

    expect(response.status).toBe(200);
    expect(response.data).toEqual(
      expect.objectContaining({ data: expect.any(Array) })
    );
  });

  it("should returns false if Min and Max not in kids range", () => {
    const Min = 19;
    const Max = 60;

    expect(isKidsRange({ Min, Max })).toBe(false);
  });
});
describe("FETCH_ADULT endpoint", () => {
  it(" Should call FETCH_ADULT endpoint", async () => {
    const Min = 19;
    const Max = 60;
    expect(isAdultsRange({ Min, Max })).toBe(true);

    const response = await axios.get(Endpoints.FETCH_ADULTS);

    expect(response.status).toBe(200);
    expect(response.data).toEqual(
      expect.objectContaining({ data: expect.any(Array) })
    );
  });

  it("should returns false if Min and Max not in adults range", () => {
    const Min = 0;
    const Max = 18;

    expect(isAdultsRange({ Min, Max })).toBe(false);
  });
});
describe("FETCH_SENIORS endpoint", () => {
  it(" Should call FETCH_SENIORS endpoint", async () => {
    const Min = 61;
    const Max = 100;
    expect(isSeniorsRange({ Min, Max })).toBe(true);

    const response = await axios.get(Endpoints.FETCH_ADULTS);

    expect(response.status).toBe(200);
    expect(response.data).toEqual(
      expect.objectContaining({ data: expect.any(Array) })
    );
  });

  it("should returns false if Min and Max not in senior range", () => {
    const Min = 0;
    const Max = 18;

    expect(isSeniorsRange({ Min, Max })).toBe(false);
  });
});
describe("FETCH_KIDS and FETCH_ADULTS endpoint", () => {
  it(" Should call FETCH_KIDS and FETCH_ADULTS endpoint", async () => {
    const Min = 0;
    const Max = 60;
    expect(isKidssOrAdultRange({ Min, Max })).toBe(true);

    const response_FETCH_KIDS = await axios.get(Endpoints.FETCH_KIDS);
    const response_FETCH_ADULTS = await axios.get(Endpoints.FETCH_ADULTS);

    expect(response_FETCH_KIDS.status).toBe(200);
    expect(response_FETCH_ADULTS.status).toBe(200);
    expect(response_FETCH_KIDS.data).toEqual(
      expect.objectContaining({ data: expect.any(Array) })
    );
    expect(response_FETCH_ADULTS.data).toEqual(
      expect.objectContaining({ data: expect.any(Array) })
    );
  });

  it("should returns false if Min and Max not in Kids Or Adult Range", () => {
    const Min = 0;
    const Max = 18;

    expect(isKidssOrAdultRange({ Min, Max })).toBe(false);
  });
});
describe("FETCH_SENIRS and FETCH_ADULTS endpoint", () => {
  it(" Should call FETCH_SENIORS and FETCH_ADULTS endpoint", async () => {
    const Min = 19;
    const Max = 62;
    expect(isSeniorOrAdultRange({ Min, Max })).toBe(true);

    const response_FETCH_ADULTS = await axios.get(Endpoints.FETCH_ADULTS);
    const response_FETCH_SENIORS = await axios.get(Endpoints.FETCH_SENIORS);

    expect(response_FETCH_ADULTS.status).toBe(200);
    expect(response_FETCH_SENIORS.status).toBe(200);
    expect(response_FETCH_ADULTS.data).toEqual(
      expect.objectContaining({ data: expect.any(Array) })
    );
    expect(response_FETCH_SENIORS.data).toEqual(
      expect.objectContaining({ data: expect.any(Array) })
    );
  });

  it("should returns false if Min and Max not in Kids Or Adult Range", () => {
    const Min = 19;
    const Max = 60;

    expect(isSeniorOrAdultRange({ Min, Max })).toBe(false);
  });
});
describe("FETCH_SENIRS and FETCH_ADULTS and FETCH_KIDS endpoint", () => {
  it(" Should call FETCH_SENIORS and FETCH_ADULTS endpoint", async () => {
    const Min = 0;
    const Max = 90;
    expect(isKidssOrAdultorSeniorRange({ Min, Max })).toBe(true);

    const response_FETCH_ADULTS = await axios.get(Endpoints.FETCH_ADULTS);
    const response_FETCH_SENIORS = await axios.get(Endpoints.FETCH_SENIORS);
    const response_FETCH_KIDS = await axios.get(Endpoints.FETCH_KIDS);

    expect(response_FETCH_ADULTS.status).toBe(200);
    expect(response_FETCH_SENIORS.status).toBe(200);
    expect(response_FETCH_KIDS.status).toBe(200);
    expect(response_FETCH_ADULTS.data).toEqual(
      expect.objectContaining({ data: expect.any(Array) })
    );
    expect(response_FETCH_SENIORS.data).toEqual(
      expect.objectContaining({ data: expect.any(Array) })
    );
    expect(response_FETCH_KIDS.data).toEqual(
      expect.objectContaining({ data: expect.any(Array) })
    );
  });

  it("should returns false if Min and Max not in Kids Or Adult or KIds Range", () => {
    const Min = 19;
    const Max = 60;

    expect(isKidssOrAdultorSeniorRange({ Min, Max })).toBe(false);
  });
});
