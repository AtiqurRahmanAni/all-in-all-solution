import streamlit as st
from PIL import Image


st.set_page_config(layout="wide", initial_sidebar_state='collapsed')


if 'show_images' not in st.session_state:
    st.session_state.show_images = False

col1, col2 = st.columns(2, gap="small")

with col1:
    with st.container():
        st.markdown("<div style='height: 500px; overflow-y: auto;'>",
                    unsafe_allow_html=True)
        uploaded_image = st.file_uploader(
            label='Upload an image', type=['png', 'jpg', 'jpeg'], accept_multiple_files=False)
        st.session_state.uploaded_image = uploaded_image
        if uploaded_image is not None:
            img = Image.open(uploaded_image)
            st.image(img, use_column_width=True)
            if st.button(label='Detect', type='primary', use_container_width=True):
                st.session_state.show_images = True
        st.markdown("</div>", unsafe_allow_html=True)


with col2:
    with st.container(height=800):
        if st.session_state.show_images and uploaded_image is not None:
            img = Image.open(uploaded_image)
            for i in range(3):
                st.image(img)
