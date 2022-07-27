import { defineStore } from "pinia";
import MainTestApi from "../api";
import { 
  AddAnnouncementRequestType, 
  GetAnnounceRequestType, 
  GetAnnounceResponseType 
} from "../api/index.validator";
import { LoadingStatus } from "../datatype/loading";
import { useLoadingStore } from "./loading";

export interface UseCounterStoreType {
  currentCount: number;
  announcementList: GetAnnounceResponseType[];
  announcementTotal: number;
}

export const useCounterStore = defineStore('counter', {
  state: () => {
    return <UseCounterStoreType>{
      currentCount: 0,
      announcementList: [],
      announcementTotal: 0,
    };
  },
  actions: {
    appendCount() {
      this.currentCount++;
    },
    async getAnnouncementListHandler(): Promise<boolean> {
      const {
        isNowLoading,
        addLoadingStatus,
        removeLoadingStatus,
      } = useLoadingStore()

      if (isNowLoading(LoadingStatus.GET_ANNOUNCEMENT_LIST)) return false;
      try {
        addLoadingStatus(LoadingStatus.GET_ANNOUNCEMENT_LIST);
        const mainTestApi = MainTestApi();
        const { list, total } = await mainTestApi.getAnnouncementListApi();
        this.announcementList = list;
        this.announcementTotal = total;
        return true;
      } catch (error) {
        this.getAnnouncementListCatchError(error);
        return false;
      } finally {
        removeLoadingStatus(LoadingStatus.GET_ANNOUNCEMENT_LIST)
      }
    },
    getAnnouncementListCatchError(error: unknown) {
      console.log(error);
    },
    async getAnnouncementHandler(id: string) {
      const {
        isNowLoading,
        addLoadingStatus,
        removeLoadingStatus,
      } = useLoadingStore()

      if (isNowLoading(LoadingStatus.GET_ANNOUNCEMENT)) return;
      try {
        addLoadingStatus(LoadingStatus.GET_ANNOUNCEMENT);
        const mainTestApi = MainTestApi();
        return await mainTestApi.getAnnouncementByIdApi(id);
      } catch (error) {
        this.getAnnouncementCatchError(error);
      } finally {
        removeLoadingStatus(LoadingStatus.GET_ANNOUNCEMENT)
      }
    },
    getAnnouncementCatchError(error: unknown) {
      console.log(error);
    },
    async addAnnouncementHandler(addCluster: AddAnnouncementRequestType): Promise<boolean> {
      const {
        isNowLoading,
        addLoadingStatus,
        removeLoadingStatus,
      } = useLoadingStore()

      if (isNowLoading(LoadingStatus.ADD_ANNOUNCEMENT)) return false;
      try {
        addLoadingStatus(LoadingStatus.ADD_ANNOUNCEMENT);
        const mainTestApi = MainTestApi();
        return await mainTestApi.addAnnouncement(addCluster);
      } catch (error) {
        this.addAnnouncementCatchError(error);
        return false;
      } finally {
        removeLoadingStatus(LoadingStatus.ADD_ANNOUNCEMENT)
      }
    },
    addAnnouncementCatchError(error: unknown) {
      console.log(error);
    },
    async updateAnnouncementHandler(updateCluster: GetAnnounceRequestType): Promise<boolean> {
      const {
        isNowLoading,
        addLoadingStatus,
        removeLoadingStatus,
      } = useLoadingStore()

      if (isNowLoading(LoadingStatus.UPDATE_ANNOUNCEMENT)) return false;
      try {
        addLoadingStatus(LoadingStatus.UPDATE_ANNOUNCEMENT);
        const mainTestApi = MainTestApi();
        return await mainTestApi.updateAnnouncement(updateCluster);
      } catch (error) {
        this.updateAnnouncementCatchError(error);
        return false;
      } finally {
        removeLoadingStatus(LoadingStatus.UPDATE_ANNOUNCEMENT)
      }
    },
    updateAnnouncementCatchError(error: unknown) {
      console.log(error);
    },
    async deleteAnnouncementHandler(id: string): Promise<boolean> {
      const {
        isNowLoading,
        addLoadingStatus,
        removeLoadingStatus,
      } = useLoadingStore()

      if (isNowLoading(LoadingStatus.DELETE_ANNOUNCEMENT)) return false;
      try {
        addLoadingStatus(LoadingStatus.DELETE_ANNOUNCEMENT);
        const mainTestApi = MainTestApi();
        return await mainTestApi.deleteAnnouncement(id);
      } catch (error) {
        this.deleteAnnouncementCatchError(error);
        return false;
      } finally {
        removeLoadingStatus(LoadingStatus.DELETE_ANNOUNCEMENT)
      }
    },
    deleteAnnouncementCatchError(error: unknown) {
      console.log(error);
    },
  }
})

