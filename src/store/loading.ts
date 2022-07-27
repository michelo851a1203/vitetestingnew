import { defineStore } from "pinia";
import { LoadingStatus } from "../datatype/loading";

export interface UseLoadingStoreType {
  isLoadingArray: LoadingStatus[],
}

export const useLoadingStore = defineStore("loading", {
  state: () => {
    return <UseLoadingStoreType>{
      isLoadingArray: [],
    }
  },
  actions: {
    isNowLoading(loadingStatus: LoadingStatus) {
      return this.isLoadingArray.includes(loadingStatus);
    },
    addLoadingStatus(loadingStatus: LoadingStatus) {
      this.isLoadingArray.push(loadingStatus);
    },
    removeLoadingStatus(loadingStatus: LoadingStatus) {
      const loadingIndex = this.isLoadingArray.findIndex((loadingStatusItem) => {
        return loadingStatusItem === loadingStatus;
      });
      this.isLoadingArray.splice(loadingIndex, 1);
    }
  }
})
