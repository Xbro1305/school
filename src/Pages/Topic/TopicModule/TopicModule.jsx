import React, { useState } from 'react';
import './TopicModule.css';
import { TbTextScan2 } from "react-icons/tb";
import { FaPhotoFilm } from "react-icons/fa6";
import { RxFilePlus } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const TopicModule = ({ closeModals }) => {
    const [activeTab, setActiveTab] = useState('text');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='create_post' >
            <div className="create-post-container">
                <div className='cozdanie'>
                    <h3>Создание поста</h3>
                    <IoMdClose onClick={closeModals} />
                </div>
                <div className="tab">
                    <button
                        className={`tablinks ${activeTab === 'text' ? 'active' : ''}`}
                        onClick={() => handleTabClick('text')}
                    >
                        <TbTextScan2 /> Текстовый пост
                    </button>
                    <button
                        className={`tablinks ${activeTab === 'photo' ? 'active' : ''}`}
                        onClick={() => handleTabClick('photo')}
                    >
                        <FaPhotoFilm /> Фото или видео
                    </button>
                </div>

                {activeTab === 'text' && (
                    <div id="TextPost" className="tabcontent">
                        <form>
                            <input type="text" id="title" name="title" maxLength="300" required placeholder='Заголовок*' />
                            <textarea id="text" name="text" placeholder='Текст'></textarea>
                            <div id='select_botton'>
                                <select>
                                    <option value="Ну давайте поддержим">Ну давайте поддержим</option>
                                    <option value="Ну давайте поддержим">Ну давайте поддержим</option>
                                    <option value="Ну давайте поддержим">Ну давайте поддержим</option>
                                </select>
                                <button type="submit">Опубликовать</button>
                            </div>
                        </form>
                    </div>
                )}

                {activeTab === 'photo' && (
                    <div id="PhotoVideo" className="tabcontent">
                        <form>
                            <input type="text" id="title" name="title" maxLength="300" required placeholder='Заголовок*' />
                            <div className="upload-container">
                                <RxFilePlus />
                                <p>Перетащите сюда фото или видео</p>
                                <input type="file" id="file" name="file" accept="image/*,video/*" />
                            </div>
                            <div id='select_botton'>
                                <select>
                                    <option value="Ну давайте поддержим">Ну давайте поддержим</option>
                                    <option value="Ну давайте поддержим">Ну давайте поддержим</option>
                                    <option value="Ну давайте поддержим">Ну давайте поддержим</option>
                                </select>
                                <button type="submit">Опубликовать</button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TopicModule;
