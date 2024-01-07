import { Module, Mutation, VuexModule } from "vuex-module-decorators";

/**
 * @Module
 * 为'类装饰器'，我创建的类'ModuleState'的构造方法会自动传入Module
 * 一般返回一个新类，对原有的类进行修改或扩展
 */
@Module
export default class ModuleState extends VuexModule {
    isLoading: boolean = false;

    @Mutation
    switchLS(){
        this.isLoading = !this.isLoading;
    }
}