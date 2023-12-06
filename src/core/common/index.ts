import { Weather } from '@app/types/weather';

export const isLastIndex = (index: number, items: Array<any>): boolean => {
  return index === items.length - 1;
};

export function getUniqueDays(data: Array<Weather.Data>): Array<Weather.Data> {
  const uniqueDays: Array<Weather.Data> = [];

  const getDateFromTxt = (date: string) => {
    return date.split(' ')[0];
  };

  for (const entry of data) {
    const date = getDateFromTxt(entry.dt_txt); // Extracting date part

    if (!uniqueDays.find((day: any) => getDateFromTxt(day.dt_txt) === date)) {
      uniqueDays.push(entry);
    }
  }

  return uniqueDays;
}

export function deleteKey(obj: any, keyToDelete: string | number) {
  // Create a new object without the undesired property
  const updatedObject = Object.fromEntries(
    Object.entries(obj).filter(([key]) => key !== keyToDelete)
  );

  return updatedObject;
}
