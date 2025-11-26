
const STORAGE_KEY_FILES = 'jarvis_ref_files';
const STORAGE_KEY_CATEGORIES = 'jarvis_ref_categories';

const defaultCategories = [
    { id: 'all', name: '전체' },
    { id: 'pc_security', name: 'PC 관리/보안' },
    { id: 'video', name: '동영상' },
    { id: 'office', name: '문서/사무' },
    { id: 'audio', name: '오디오' },
    { id: 'utility', name: '유틸리티' }
];

const defaultFiles = [
    {
        id: 1,
        name: '폴라리스 오피스',
        version: 'v7.1.292',
        category: 'office',
        downloads: 17526,
        rating: 4.3,
        license: '프리',
        icon: 'https://placehold.co/40x40/2563eb/ffffff?text=P',
        isHot: true
    },
    {
        id: 2,
        name: '다뷰 인디',
        version: 'v7.94',
        category: 'office',
        downloads: 10157,
        rating: 3.5,
        license: '프리',
        icon: 'https://placehold.co/40x40/0ea5e9/ffffff?text=D',
        isHot: true
    },
    {
        id: 3,
        name: 'nPDF',
        version: 'v0.9.2.9',
        category: 'office',
        downloads: 7909,
        rating: 3.1,
        license: '프리',
        icon: 'https://placehold.co/40x40/ef4444/ffffff?text=N',
        isHot: true
    },
    {
        id: 4,
        name: 'NesPDF',
        version: 'v1.1',
        category: 'office',
        downloads: 5575,
        rating: 4.0,
        license: '프리',
        icon: 'https://placehold.co/40x40/dc2626/ffffff?text=NP',
        isHot: true
    },
    {
        id: 5,
        name: 'PDF Reader for Windows 7',
        version: 'v1.0',
        category: 'office',
        downloads: 5473,
        rating: 3.4,
        license: '프리',
        icon: 'https://placehold.co/40x40/64748b/ffffff?text=PDF',
        isHot: true
    },
    {
        id: 6,
        name: 'DirectX End-User Runtimes',
        version: 'v9.29.1974',
        category: 'pc_security',
        downloads: 5461,
        rating: 4.7,
        license: '프리',
        icon: 'https://placehold.co/40x40/ea580c/ffffff?text=DX',
        isHot: true
    },
    {
        id: 7,
        name: '이지피디에프에디터3.0',
        version: 'v3.0.1.3',
        category: 'office',
        downloads: 5343,
        rating: 4.4,
        license: '프리',
        icon: 'https://placehold.co/40x40/ef4444/ffffff?text=EZ',
        isHot: true
    },
    {
        id: 8,
        name: 'Microsoft .NET Framework 4',
        version: 'v4.0',
        category: 'pc_security',
        downloads: 3929,
        rating: 3.1,
        license: '프리',
        icon: 'https://placehold.co/40x40/0284c7/ffffff?text=NET',
        isHot: true
    },
    {
        id: 9,
        name: 'MS PowerPoint Viewer',
        version: 'v1.0',
        category: 'office',
        downloads: 3824,
        rating: 2.7,
        license: '프리',
        icon: 'https://placehold.co/40x40/ea580c/ffffff?text=PPT',
        isHot: true
    },
    {
        id: 10,
        name: 'MS Excel Viewer',
        version: 'v12.0.6320',
        category: 'office',
        downloads: 3091,
        rating: 2.9,
        license: '프리',
        icon: 'https://placehold.co/40x40/16a34a/ffffff?text=XLS',
        isHot: true
    }
];

const DataManager = {
    init() {
        if (!localStorage.getItem(STORAGE_KEY_CATEGORIES)) {
            localStorage.setItem(STORAGE_KEY_CATEGORIES, JSON.stringify(defaultCategories));
        }
        if (!localStorage.getItem(STORAGE_KEY_FILES)) {
            localStorage.setItem(STORAGE_KEY_FILES, JSON.stringify(defaultFiles));
        }
    },

    getCategories() {
        this.init();
        return JSON.parse(localStorage.getItem(STORAGE_KEY_CATEGORIES));
    },

    getFiles() {
        this.init();
        return JSON.parse(localStorage.getItem(STORAGE_KEY_FILES));
    },

    saveFile(file) {
        const files = this.getFiles();
        if (file.id) {
            const index = files.findIndex(f => f.id === file.id);
            if (index !== -1) {
                files[index] = file;
            } else {
                files.push(file);
            }
        } else {
            file.id = Date.now();
            files.push(file);
        }
        localStorage.setItem(STORAGE_KEY_FILES, JSON.stringify(files));
    },

    deleteFile(id) {
        const files = this.getFiles();
        const newFiles = files.filter(f => f.id !== id);
        localStorage.setItem(STORAGE_KEY_FILES, JSON.stringify(newFiles));
    },

    addCategory(name) {
        const categories = this.getCategories();
        const id = 'cat_' + Date.now();
        categories.push({ id, name });
        localStorage.setItem(STORAGE_KEY_CATEGORIES, JSON.stringify(categories));
    }
};

// Auto-initialize on load
DataManager.init();
